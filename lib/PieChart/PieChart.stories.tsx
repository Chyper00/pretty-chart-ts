import type { Meta, StoryFn } from '@storybook/react';
import { PieChart, PieChartProps } from './PieChart';

const meta: Meta<typeof PieChart> = {
	component: PieChart,
	title: 'Components/PieChart',
	argTypes: {
		textColor: { control: 'color' },
	},
};

const data = [
	{ value: 30, label: 'A', description: 'Description A', color: '#ff6347' },
	{ value: 70, label: 'B', description: 'Description B', color: '#4682b4' },
	{ value: 100, label: 'C', description: 'Description C', color: '#ffd700' },
	{ value: 50, label: 'D', description: 'Description D', color: '#32cd32' },
	{ value: 90, label: 'E', description: 'Description E', color: '#9400d3' },
];

export default meta;

const Template: StoryFn<PieChartProps> = (args) => <PieChart {...args} />;

export const PieChartStory = Template.bind({});
PieChartStory.args = {
	data,
	textColor: '#fff',
};
