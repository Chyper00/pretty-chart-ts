import { Bar } from "./Bar";

export interface BarChartProps {
  data: { value: number; label: string; description: string }[];
  backgroundColor?: string;
  borderRadius?: string;
  duration?: number;
  callback?: (value: number, description: string) => void;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  backgroundColor,
  borderRadius,
  duration,
  callback
}) => {
  const maxHeight = Math.max(...data.map(item => item.value));

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px' }}>
      {data.map((item, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 5px' }}>
          <span>{item.value}</span>
          <Bar
            callback={callback}
            value={item.value}
            maxHeight={maxHeight}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            duration={duration}
            description={item.description}
          />
          <span style={{ marginTop: '5px' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};
