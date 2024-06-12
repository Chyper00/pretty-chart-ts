import { BarChart } from "pretty-chart-ts";

const data = [
	{ value: 30, label: 'A', description: 'Description A' },
	{ value: 70, label: 'B', description: 'Description B' },
	{ value: 100, label: 'C', description: 'Description C' },
	{ value: 50, label: 'D', description: 'Description D' },
	{ value: 90, label: 'E', description: 'Description E' },
	{ value: 30, label: 'A', description: 'Description A' },
	{ value: 70, label: 'B', description: 'Description B' },
	{ value: 100, label: 'C', description: 'Description C' },
	{ value: 50, label: 'D', description: 'Description D' },
	{ value: 90, label: 'E', description: 'Description E' }
];


function App() {
	return (
		<div className="flex justify-center items-center h-screen bg-zinc-950 text-white">
			<BarChart
				data={data}
			/>
		</div>
	);
}

export default App;
