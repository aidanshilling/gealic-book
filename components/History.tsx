"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ["Red", "Blue", "Yellow", "Green"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
			],
			borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
			borderWidth: 1,
		},
	],
};

const History = () => {
	return (
		<div className="bg-zinc-800">
			<div id="history" className="min-h-screen flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-10">
					<h1 className="font-bold text-5xl">History</h1>
					<div className="grid grid-cols-2 mt-8">
						<div>
							<p>
								Some stats and stuff will go here. Irish or Gaelic (Gaelige) is from the Celtic family of languages.
								English became dominant in Ireland in the 19th century.
							</p>
							<p className="mt-8">
								Some stats and stuff will go here. Irish or Gaelic (Gaelige) is from the Celtic family of languages.
								English became dominant in Ireland in the 19th century.
							</p>
							<p className="mt-8">
								Some stats and stuff will go here. Irish or Gaelic (Gaelige) is from the Celtic family of languages.
								English became dominant in Ireland in the 19th century.
							</p>
							<p className="mt-8">
								Some stats and stuff will go here. Irish or Gaelic (Gaelige) is from the Celtic family of languages.
								English became dominant in Ireland in the 19th century.
							</p>
						</div>
						<div>
							<Pie data={data} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
