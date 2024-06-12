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

function App() {
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
