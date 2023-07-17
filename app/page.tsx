import Navbar from "@/components/Navbar";
import TitleImage from "../public/title_image.png";
import Image from "next/image";
import History from "./history/page";

export default function Home() {
	return (
		<main>
			<Image
				src={TitleImage}
				alt="Farm in Northern Ireland"
				className="min-h-screen object-cover fixed -z-10 opacity-50"
			/>
			<Navbar />
			<div className="flex flex-col items-center min-h-screen justify-center">
				<h1 className="font-bold text-8xl text-white">The Lost Language</h1>
				<p className="py-2">By Megan Kyte, Kayla Thompson & Aidan Shilling</p>
				<h3 className="text-3xl font-semibold">An Exploration of the Irish Language</h3>
			</div>
			<History />
		</main>
	);
}
