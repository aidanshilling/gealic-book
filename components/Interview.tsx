"use client";
import dynamic from "next/dynamic";
import pj1 from "../public/pj1.jpg";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface InterviewProps {
	name: string;
	videoUrl: string;
	text: string;
}

const Interview = ({ name, videoUrl, text }: InterviewProps) => {
	return (
		<div className="mt-8">
			<div className="grid grid-cols-2">
				<div>
					<Image src={pj1} alt={"PJ"} />
				</div>
				<div>
					<p className="ml-8">{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Interview;
