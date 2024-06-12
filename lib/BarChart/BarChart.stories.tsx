import type { Meta, StoryFn } from '@storybook/react';
import { BarChart, BarChartProps } from './BarChart';

const meta: Meta<typeof BarChart> = {
	component: BarChart,
	title: 'Components/BarChart',
	argTypes: {
		backgroundColor: { control: 'color' },
		borderRadius: { control: 'text' },
		duration: { control: 'number' },
	},
};

const data = [
	{ value: 30, label: 'A', description: 'Description A' },
	{ value: 70, label: 'B', description: 'Description B' },
	{ value: 100, label: 'C', description: 'Description C' },
	{ value: 50, label: 'D', description: 'Description D' },
	{ value: 90, label: 'E', description: 'Description E' },
];

export default meta;

const Template: StoryFn<BarChartProps> = (args) => <BarChart {...args} />;

export const BarChartStory = Template.bind({});
BarChartStory.args = {
	data,
	backgroundColor: '#b72fb7',
	borderRadius: '3px',
	duration: 1.5,
};
