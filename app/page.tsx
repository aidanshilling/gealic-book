import Navbar from "@/components/Navbar";
import TitleImage from "../public/title_image.png";
import Image from "next/image";
import History from "@/components/History";
import Interviews from "@/components/Interviews";

export default function Home() {
	return (
		<main>
			<Image
				src={TitleImage}
				alt="Farm in Northern Ireland"
				className="min-h-screen object-cover fixed -z-10 opacity-80"
			/>
			<Navbar />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className="mx-auto max-w-4xl">
					<div className="flex flex-col min-h-screen justify-center">
						<h1 className="font-bold text-8xl text-white">The Lost Language</h1>
						<h3 className="pl-4 text-3xl font-semibold">An Exploration of the Irish Language</h3>
						<p className="pl-4 py-2 text-gray-200">By Megan Kyte, Kayla Thompson & Aidan Shilling</p>
					</div>
				</div>
			</div>
			<History />
			<Interviews />
		</main>
	);
}
