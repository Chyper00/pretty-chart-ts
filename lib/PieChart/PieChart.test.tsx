import { render } from '@testing-library/react';
import { PieChart } from './PieChart';

describe('PieChart Component', () => {
  const data = [
    { value: 30, label: 'A', description: 'Description A', color: '#ff6347' },
    { value: 70, label: 'B', description: 'Description B', color: '#4682b4' },
    { value: 100, label: 'C', description: 'Description C', color: '#ffd700' },
  ];

  it('renders without crashing', () => {
    render(<PieChart data={data} />);
  });

  it('renders correct number of slices', () => {
    const { container } = render(<PieChart data={data} />);
    const slices = container.querySelectorAll('path');
    expect(slices.length).toBe(data.length);
  });

  it('renders correct number of labels', () => {
    const { container } = render(<PieChart data={data} />);
    const labels = container.querySelectorAll('text');
    expect(labels.length).toBe(data.length * 2); // Two text elements per slice for label and value
  });
});
