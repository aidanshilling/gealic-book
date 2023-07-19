import Interview from "./Interview";
import pj1 from "../public/pj1.jpg";
import pjbw1 from "../public/pjbw1.jpg";

const Interviews = () => {
	return (
		<div className="bg-zinc-900">
			<div id="interviews" className="min-h-screen flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-10">
					<h1 className="font-bold text-5xl">Interviews</h1>
					<Interview
						image={pjbw1}
						name="PJ"
						text={`PJ is a remarkable individual who embodies a multitude of talents and passions. As the proud owner of Sweeny's Pharmacy, a cherished establishment nestled in the heart of Dublin, Ireland, PJ's shop serves as a captivating homage to the literary legacy of James Joyce and his seminal work, Ulysses. Not only is PJ an expert in the world of literature, but he is also a polyglot, fluent in an impressive array of ten languages, including French and Irish Gaelic. His linguistic prowess is matched only by his unwavering dedication as an advocate for the Irish Language, constantly striving to preserve and promote its rich cultural heritage. Beyond his literary and linguistic pursuits, PJ's passion extends to the realm of music, where he skillfully strums melodies on his guitar. Perhaps most notably, PJ's warm and welcoming nature shines through, as he consistently demonstrates an innate kindness that leaves a lasting impression on all those fortunate enough to cross his path.`}
						videoUrl="https://youtu.be/G8LeDANQ7UE"
					/>
				</div>
			</div>
		</div>
	);
};

export default Interviews;
