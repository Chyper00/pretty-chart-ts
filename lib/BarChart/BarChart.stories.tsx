import type { Meta } from '@storybook/react';
import { BarChart } from './BarChart';


const meta: Meta = {
	component: BarChart,
	title: 'Components/BarChart',
};
const data = [30, 70, 100, 50, 90];
const labels = ['A', 'B', 'C', 'D', 'E'];

export default meta;

export const BarChartStory = (args: any) => <BarChart data={data} labels={labels} />;

