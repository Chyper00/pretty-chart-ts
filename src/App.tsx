import { BarChart } from "pretty-chart";
const data = [30, 70, 100, 50, 90];  // Exemplo de dados
const labels = ['A', 'B', 'C', 'D', 'E'];  // Exemplo de labels

function App() {
	return (
		<>
			<div>
				<BarChart data={data} labels={labels} />
			</div>
		</>
	);
}

export default App;
