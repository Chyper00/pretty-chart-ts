import React from 'react';

const data = [
  { value: 30, label: 'A', description: 'Description A' },
  { value: 70, label: 'B', description: 'Description B' },
  { value: 100, label: 'C', description: 'Description C' },
  { value: 50, label: 'D', description: 'Description D' },
  { value: 90, label: 'E', description: 'Description E' },
  { value: 30, label: 'A', description: 'Description A' },
  { value: 70, label: 'B', description: 'Description B' },
  { value: 100, label: 'C', description: 'Description C' },
  { value: 50, label: 'D', description: 'Description D' },
  { value: 90, label: 'E', description: 'Description E' }
];

export const PieChart: React.FC = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  console.log(total)

  // let startAngle = 0;
  return (
    <div className='bg-white h-5 w-5'> </div>
  );
};

export default PieChart;
