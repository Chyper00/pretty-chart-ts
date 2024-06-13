import React from 'react';
import { motion } from 'framer-motion';
import './PieChart.css';

interface DataItem {
  label: string;
  value: number;
  color: string;
  description: string;
}

export interface PieChartProps {
  data: DataItem[];
  textColor?: string;
}

export const PieChart: React.FC<PieChartProps> = ({ data, textColor = "#fff" }) => {

  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  let startAngle = 0;
  const slices: any = [];
  const labels: any = [];
  data.forEach((slice, index) => {
    const angle = (slice.value / total) * 360;
    const endAngle = startAngle + angle;
    const largeArcFlag = angle > 180 ? 1 : 0;

    const startX = Math.cos((startAngle * Math.PI) / 180) * 100;
    const startY = Math.sin((startAngle * Math.PI) / 180) * 100;
    const endX = Math.cos((endAngle * Math.PI) / 180) * 100;
    const endY = Math.sin((endAngle * Math.PI) / 180) * 100;

    const pathData = `M 0 0 L ${startX} ${startY} A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

    slices.push(
      <motion.g
        key={slice.label}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}>
        <motion.path d={pathData} fill={slice.color} />
      </motion.g>
    );

    // Calculate the middle angle of the slice for label positioning
    const middleAngle = startAngle + angle / 2;
    const labelX = Math.cos((middleAngle * Math.PI) / 180) * 70;
    const labelY = Math.sin((middleAngle * Math.PI) / 180) * 70;

    labels.push(
      <motion.g key={`label-${slice.label}`}>
        <motion.text x={labelX} y={labelY - 6} fill={textColor} textAnchor="middle" fontSize="9px">
          {slice.label}
        </motion.text>
        <motion.text x={labelX} y={labelY + 6} fill={textColor} textAnchor="middle" fontSize="9px">
          {slice.value}
        </motion.text>
      </motion.g>
    );

    startAngle = endAngle;
  });

  return (
    <div className="w-1/3" style={{ position: 'relative' }}>
      <svg viewBox="-100 -100 200 200">
        {slices}
        {labels}
        <circle cx="0" cy="0" r="60" fill="none" className="pie-chart-hole" />
      </svg>
    </div>
  );
};
