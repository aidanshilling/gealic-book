"use client";
import { Line, Pie } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	ChartOptions,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const censusData = {
	labels: ["Spoken Very Well", "Spoken Well", "Spoken poorly"],
	datasets: [
		{
			label: "% in speaking category",
			data: [10, 32, 58],
			backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
			borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
			borderWidth: 1,
		},
	],
};

const censusOptions: ChartOptions = {
	plugins: {
		legend: {
			position: "left",
			align: "start",
		},
	},
};

const scaleOptions: ChartOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
			align: "start",
		},
	},
};

const scaleData = {
	labels: [
		"1851",
		"1861",
		"1871",
		"1881",
		"1901",
		"1911",
		"1926",
		"1936",
		"1946",
		"1951",
		"1961",
		"1971",
		"1981",
		"1991",
		"2002",
		"2006",
		"2016",
		"2022",
	],
	datasets: [
		{
			label: "Number of Irish Speakers in millions",
			data: [
				4, 3.2, 2.7, 2.5, 1.9, 1.6, 1.4, 0.681, 0.426, 0.36, 0.361, 0.393, 0.374, 0.329, 0.251, 0.184, 0.163, 1.76, 1.9,
			],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

const History = () => {
	return (
		<div className="bg-zinc-900">
			<div id="history" className="min-h-screen flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-10">
					<h1 className="font-bold text-5xl">A Brief History</h1>
					<div className="grid grid-cols-2 mt-8">
						<div>
							<p>
								The Irish language, also known as Irish Gaelic or Gaeilge, is a Celtic language native to Ireland. It
								has a rich and ancient history, dating back over 2,500 years. The language evolved from the primitive
								Celtic spoken by the early inhabitants of Ireland and was influenced by subsequent invasions, including
								those by the Vikings and the Normans. Irish flourished as the dominant language of Ireland until the
								19th century when it faced a significant decline due to political and social factors.
							</p>
							<p className="mt-8">
								During the 19th and 20th centuries, the Irish language experienced a period of decline as English became
								more prevalent. English was imposed as the primary language of education, administration, and business,
								leading to a decline in Irish-speaking communities. However, efforts to revitalize the language gained
								momentum in the late 20th century, and Irish was officially recognized as the first national language of
								Ireland in the Irish Constitution of 1937.
							</p>
							<p className="mt-8">
								Today, the Irish language remains an important part of Irelands cultural heritage and identity.
								According to the 2022 census, approximately 1.9 million people in Ireland have some level of proficiency
								in Irish, with around 72,000 native speakers. The Gaeltacht regions, located primarily along the western
								coast, are areas where Irish remains the primary community language. These regions play a vital role in
								preserving and promoting the language.
							</p>
						</div>
						<div className="ml-8">
							<h1 className="text-xl text-zinc-500 font-medium">Ability to speak Irish, Census 2022</h1>
							<Pie data={censusData} options={censusOptions} />

							<h1 className="text-xl text-zinc-500 font-medium">Change in Irish Speakers, 1850 to 2022</h1>
							<Line data={scaleData} options={scaleOptions} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
