import { BarChart } from "pretty-chart-ts";

const data = [30, 70, 100, 50, 90];
const labels = ['A', 'B', 'C', 'D', 'E'];

function App() {
	return (
		<>
			<div className="flex justify-center items-center h-screen bg-zinc-950 text-white">
				<BarChart
					data={data}
					labels={labels}
					backgroundColor="#7134db"
					borderRadius="3px"
					duration={1.5}
				/>
			</div>
		</>
	);
}

export default App;
