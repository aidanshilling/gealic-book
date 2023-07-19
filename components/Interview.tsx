"use client";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface InterviewProps {
	name: string;
	videoUrl: string;
	text: string;
	image: StaticImageData;
}

const Interview = ({ image, name, videoUrl, text }: InterviewProps) => {
	return (
		<div className="mt-8">
			<div className="grid grid-cols-2">
				<div>
					<Image src={image} alt={"PJ"} />
				</div>
				<div className="ml-8">
					<h1 className="mb-4 text-3xl text-zinc-500 font-medium">{name}</h1>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Interview;
