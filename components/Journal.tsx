"use client";

import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";

import pj1 from "../public/pj1.jpg";
import connor1 from "../public/connor1.jpg";
import connor2 from "../public/connor2.jpg";
import connor3 from "../public/connor3.jpg";
import sweenys1 from "../public/sweenys1.jpg";
import sweenys2 from "../public/sweenys2.jpg";
import sweenys3 from "../public/sweenys3.jpg";
import pjbw from "../public/pjbw1.jpg";
import emma1 from "../public/emma1.jpg";
import emma2 from "../public/emma2.jpg";
import emma3 from "../public/emma3.jpg";
import jamese from "../public/jamese.jpg";
import jamese2 from "../public/jamese2.jpg";
import jamese3 from "../public/jamese3.jpg";
import man from "../public/man.jpg";
import sheep from "../public/sheep.jpg";
import sheep2 from "../public/sheep2.jpg";

const images = [
	jamese,
	jamese2,
	jamese3,
	man,
	sheep,
	sheep2,
	connor1,
	connor2,
	connor3,
	pj1,
	pjbw,
	sweenys1,
	sweenys2,
	sweenys3,
	emma1,
	emma2,
	emma3,
];

const Journal = () => {
	const [index, setIndex] = useState(-1);

	return (
		<div className="bg-zinc-900">
			<div id="journal" className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-10">
					<h1 className="font-bold text-5xl">Journal</h1>
					<div>
						<div className="my-4">
							<Gallery
								images={images}
								onClick={(idx: number, item: any) => setIndex(idx)}
								enableImageSelection={false}
							/>
							<Lightbox slides={images} open={index >= 0} index={index} close={() => setIndex(-1)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journal;
