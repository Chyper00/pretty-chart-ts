# pretty-chart-ts 💅

[![npm version](https://img.shields.io/npm/v/pretty-chart-ts.svg)](https://www.npmjs.com/package/pretty-chart-ts)

## About ℹ️

pretty-chart-ts is a simple library that provides easy-to-use charts 📈

## Setup 🛠️

You can install pretty-chart-ts via npm or yarn:

```bash
npm install pretty-chart-ts
# or
yarn add pretty-chart-ts
```

## Example bar-chart

```bash

import { BarChart, DataType } from "pretty-chart-ts";

const data: DataType[] = [
	{ value: 45, label: 'Peach', children: <span className='text-4xl'>🍑</span>, childrenPosition: "inside" },
	{ value: 30, label: 'Watermelon', children: <span>🍉</span> },
	{ value: 50, label: 'Orange', children: <span>🍊</span> },
	{ value: 25, label: 'Strawberry', children: <span>🍓</span>, description: 'An description about straberry ' },
	{ value: 35, label: 'Kiwi', children: <span className='text-4xl'>🥝</span>, childrenPosition: "outside" },
];

const handleClick = (item: DataType) => {
	alert(`Clicked on ${item.label}`);
};

const MyComponent = () => (
	<div className="flex bg-slate-800 h-screen justify-center items-center text-white">
		<BarChart
			data={data}
			width={100}
			style="rounded-lg bg-purple-800"
			duration={1.5}
			callback={handleClick}
		/>
	</div>
);

export default MyComponent;

```
