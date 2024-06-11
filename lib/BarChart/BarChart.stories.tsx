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

const data = [30, 70, 100, 50, 90];
const labels = ['A', 'B', 'C', 'D', 'E'];

export default meta;

const Template: StoryFn<BarChartProps> = (args) => <BarChart {...args} />;

export const BarChartStory = Template.bind({});
BarChartStory.args = {
	data,
	labels,
	backgroundColor: '#b72fb7',
	borderRadius: '3px',
	duration: 1.5,
};
