import { Bar } from "./Bar";

export interface BarChartProps {
  data: number[];
  labels: string[];
  backgroundColor?: string;
  borderRadius?: string;
  duration?: number;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  backgroundColor,
  borderRadius,
  duration
}) => {
  const maxHeight = Math.max(...data);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px' }}>
      {data.map((value, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 5px' }}>
          <span>{value}</span>
          <Bar
            value={value}
            maxHeight={maxHeight}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            duration={duration}
          />
          <span style={{ marginTop: '5px' }}>{labels[index]}</span>
        </div>
      ))}
    </div>
  );
};
