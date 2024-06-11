# pretty-chart-ts 📊

[![npm version](https://img.shields.io/npm/v/pretty-chart-ts.svg)](https://www.npmjs.com/package/pretty-chart-ts)
[![npm downloads](https://img.shields.io/npm/dt/pretty-chart-ts.svg)](https://www.npmjs.com/package/pretty-chart-ts)
[![GitHub license](https://img.shields.io/github/license/yourusername/pretty-chart-ts)](https://github.com/yourusername/pretty-chart-ts/blob/main/LICENSE)

## About ℹ️

pretty-chart-ts is a simple library that provides easy-to-use charts 📈

## Setup 🛠️

You can install pretty-chart-ts via npm or yarn:

```bash
npm install pretty-chart-ts
# or
yarn add pretty-chart-ts
```

# Sample

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
        duration={1.5}
		/>
  );
}

export default App;
```
