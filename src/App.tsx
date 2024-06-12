// import { BarChart } from "pretty-chart-ts";

import { PieChart } from "pretty-chart-ts";



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

