# pretty-chart-ts 📊

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
import React from 'react';
import { BarChart } from 'pretty-chart-ts';

const data = [
  { value: 30, label: 'A', description: 'Description A' },
  { value: 70, label: 'B', description: 'Description B' },
  { value: 100, label: 'C', description: 'Description C' },
  { value: 50, label: 'D', description: 'Description D' },
  { value: 90, label: 'E', description: 'Description E' },
];

const App: React.FC = () => {
  const handleBarClick = (value, description) => {
    alert(`Value: ${value}, Description: ${description}`);
  };

  return (
    <BarChart
      data={data}
      backgroundColor="#7134db"
      borderRadius="3px"
      duration={1.5}
    />
  );
}

export default App;

```

## Example pie-chart

```bash
import React from 'react';
import { PieChart } from "pretty-chart-ts";

const data = [
  { value: 30, label: 'A', description: 'Description A' },
  { value: 70, label: 'B', description: 'Description B' },
  { value: 100, label: 'C', description: 'Description C' },
  { value: 50, label: 'D', description: 'Description D' },
  { value: 90, label: 'E', description: 'Description E' },
];

const App: React.FC = () => {
	const data = [
		{ label: 'A', value: 30, color: '#FF5733', description: 'Descrição para A' },
		{ label: 'B', value: 20, color: '#33FF57', description: 'Descrição para B' },
		{ label: 'C', value: 50, color: '#5733FF', description: 'Descrição para C' },
	];

	return (
		<div className="flex justify-center items-center h-screen bg-zinc-950">
			<PieChart data={data} />
		</div>
	);
};

export default App;

```
