"use client";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface InterviewProps {
	name: string;
	videos: string[];
	text: string;
	images: StaticImageData[];
}

const Interview = ({ images, name, videos, text }: InterviewProps) => {
	const [index, setIndex] = useState(-1);

	return (
		<div className="mt-4 mb-32 border-t-2 pt-4 border-zinc-800">
			<div className="grid grid-cols-2">
				<div>
					<Image src={images[0]} alt={"PJ"} />
				</div>
				<div className="ml-8">
					<h1 className="mb-4 text-3xl text-zinc-500 font-medium">{name}</h1>
					<p>{text}</p>
				</div>
			</div>
			<div className="my-4">
				<Gallery images={images} onClick={(idx: number, item: any) => setIndex(idx)} enableImageSelection={false} />
				<Lightbox slides={images} open={index >= 0} index={index} close={() => setIndex(-1)} />
			</div>
			{videos.map((video, i) => (
				<div key={i} className="mb-4">
					<ReactPlayer width={"auto"} url={video} />
				</div>
			))}
		</div>
	);
};

export default Interview;
