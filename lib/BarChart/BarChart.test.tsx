import { render, screen } from "@testing-library/react";
import { BarChart } from "./BarChart";

describe(`Component: ${BarChart.name}`, () => {
  it("should render with the given data", () => {
    const data = [
      { value: 30, label: 'A', description: 'Description A' },
      { value: 70, label: 'B', description: 'Description B' },
      { value: 100, label: 'C', description: 'Description C' },
      { value: 50, label: 'D', description: 'Description D' },
      { value: 90, label: 'E', description: 'Description E' },
    ];

    render(
      <BarChart
        data={data}
        backgroundColor="#b72fb7"
        borderRadius="3px"
        duration={1.5}
      />
    );

    // Check if each label is rendered
    data.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });

    // Check if each value is rendered
    data.forEach(item => {
      expect(screen.getByText(item.value.toString())).toBeInTheDocument();
    });
  });
});
