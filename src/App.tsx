// import { BarChart } from "pretty-chart-ts";

import { BarChart, DataType } from "pretty-chart-ts";



// const data = [
// 	{ value: 30, label: 'A', description: 'Description A' },
// 	{ value: 70, label: 'B', description: 'Description B' },
// 	{ value: 100, label: 'C', description: 'Description C' },
// 	{ value: 50, label: 'D', description: 'Description D' },
// 	{ value: 90, label: 'E', description: 'Description E' },
// 	{ value: 30, label: 'A', description: 'Description A' },
// 	{ value: 70, label: 'B', description: 'Description B' },
// 	{ value: 100, label: 'C', description: 'Description C' },
// 	{ value: 50, label: 'D', description: 'Description D' },
// 	{ value: 90, label: 'E', description: 'Description E' }
// ];


// function App() {
// 	return (
// 		<div className="flex justify-center items-center h-screen bg-zinc-950 text-white">
// 			<BarChart
// 				data={data}
// 			/>
// 		</div>
// 	);
// }

// export default App; 

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


