import type { Meta, StoryFn } from '@storybook/react';
import { BarChart } from './BarChart';
import { BarChartProps, DataType } from './Bar.interface';

const meta: Meta<typeof BarChart> = {
	component: BarChart,
	title: 'Components/BarChart',
	argTypes: {
		style: { control: 'text' },
		duration: { control: 'number' },
		width: { control: 'number' },
		callback: { control: 'text' }
	},
};

const data: DataType[] = [
	{ value: 45, label: 'Peach', description: 'A fruit known for its sweetness', children: <span className='text-4xl'>🍑</span>, childrenPosition: 'inside' },
	{ value: 30, label: 'Watermelon', description: 'Known for its simplicity and readability', children: <span className='text-4xl'>🍉</span>, childrenPosition: 'inside' },
	{ value: 50, label: 'Orange', description: 'A citrus fruit with a tangy flavor', children: <span className='text-4xl'>🍊</span>, childrenPosition: 'inside' },
	{ value: 25, label: 'Strawberry', description: 'A sweet and juicy berry', children: <span className='text-4xl'>🍓</span>, childrenPosition: 'inside' },
	{ value: 35, label: 'Kiwi', description: 'A fruit with green flesh and tiny black seeds', children: <span className='text-4xl'>🥝</span>, childrenPosition: 'inside' },
	{ value: 50, label: 'Pizza', description: 'kawabanga', children: <span className='text-4xl'>🍕</span>, childrenPosition: 'inside' },
];


const handleClick = (item: DataType) => {
	alert(item);
};

export default meta;

const Template: StoryFn<BarChartProps> = (args) => (
	<div className="flex bg-slate-800 h-screen justify-center items-center text-white">
		<BarChart {...args} />
	</div>
);

export const BarChartStory = Template.bind({});
BarChartStory.args = {
	data,
	width: 150,
	style: "rounded-lg bg-purple-800",
	duration: 1.2,
	callback: handleClick,
};
