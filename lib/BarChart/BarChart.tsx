
import type { ReactNode } from "react";
import { Bar } from "./Bar";

export const BarChart = ({ data, labels }: any): ReactNode => {
  // Encontrar o valor máximo na lista de dados
  const maxHeight = Math.max(...data);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: '300px' }}>
      {data.map((value: any, index: any) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 5px' }}>
          <span >{value}</span>
          <Bar value={value} maxHeight={maxHeight} />
          <span style={{ marginTop: '5px' }}>{labels[index]}</span>
        </div>
      ))}
    </div>
  );
};

