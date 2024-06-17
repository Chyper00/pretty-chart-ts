import { Bar } from "./Bar";
import { BarChartProps } from "./Bar.interface";

export const BarChart: React.FC<BarChartProps> = ({
  data,
  backgroundColor,
  borderRadius,
  duration,
  width,
  callback,
  style
}) => {
  const maxHeight = Math.max(...data.map(item => item.value));
  console.log(maxHeight)
  return (
    <div className="flex items-end h-72">
      {data.map((item, index) => (
        <div key={index} className={`flex flex-col items-center mx-1`}>
          <span>{item.value}</span>
          <Bar
            {...item}
            width={width}
            callback={callback}
            maxHeight={maxHeight}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            duration={duration}
            style={style}
          />
          <span className="mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
