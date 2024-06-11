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

const data = [30, 70, 100, 50, 90];
const labels = ['A', 'B', 'C', 'D', 'E'];

function App() {
  return (
    <BarChart
        data={data}
        labels={labels}
        backgroundColor="#7134db"
        borderRadius="3px"
        duration={1.5} />
  );
}

export default App;
```
