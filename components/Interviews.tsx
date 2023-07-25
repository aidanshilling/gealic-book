import Interview from "./Interview";
import pj1 from "../public/pj1.jpg";
import connor1 from "../public/connor1.jpg";
import connor2 from "../public/connor2.jpg";
import connor3 from "../public/connor3.jpg";
import sweenys1 from "../public/sweenys1.jpg";
import sweenys2 from "../public/sweenys2.jpg";
import sweenys3 from "../public/sweenys3.jpg";
import emma1 from "../public/emma1.jpg";
import emma2 from "../public/emma2.jpg";
import emma3 from "../public/emma3.jpg";

const Interviews = () => {
	return (
		<div className="bg-zinc-900">
			<div id="interviews" className="min-h-screen flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl py-10">
					<h1 className="font-bold text-5xl">People</h1>
					<Interview
						images={[pj1, sweenys1, sweenys2, sweenys3]}
						name="PJ"
						text={`PJ is a remarkable individual who embodies a multitude of talents and passions. As the proud owner of Sweeny's Pharmacy, a cherished establishment nestled in the heart of Dublin, Ireland, PJ's shop serves as a captivating homage to the literary legacy of James Joyce and his seminal work, Ulysses. Not only is PJ an expert in the world of literature, but he is also a polyglot, fluent in an impressive array of ten languages, including French and Irish Gaelic. His linguistic prowess is matched only by his unwavering dedication as an advocate for the Irish Language, constantly striving to preserve and promote its rich cultural heritage. Beyond his literary and linguistic pursuits, PJ's passion extends to the realm of music, where he skillfully strums melodies on his guitar. Perhaps most notably, PJ's warm and welcoming nature shines through, as he consistently demonstrates an innate kindness that leaves a lasting impression on all those fortunate enough to cross his path.`}
						videos={["https://youtu.be/8lgzWcKJpLs"]}
					/>
					<Interview
						images={[connor1, connor2, connor3]}
						name="Connor"
						text={`Meet Connor, a remarkable tour guide residing just outside Dublin, who possesses a captivating background that sets him apart. Despite having previously worked on the bustling streets of Wall Street, he listened to the calling of his heart and made the life-altering decision to return to his beloved hometown, Dublin. Connor's passion for the city is infectious, and his genuine and friendly nature makes him a delightful companion for any exploration. As a well-connected individual, he knows all the hidden gems and secret spots that truly capture the essence of Dublin. Beyond showcasing the city's rich history and landmarks, Connor is a fervent speaker and advocate for the Gaelic language and Irish culture, making every tour a profound cultural experience. An avid admirer of street art, he unveils the vibrant urban art scene that adds an artistic flair to the city's dynamic landscape. Beyond all his passions and endeavors, Connor cherishes his role as a family man, which only amplifies his warm and nurturing personality. With Connor as your guide, your Dublin experience promises to be nothing short of magical, weaving together history, art, and authentic Irish charm into an unforgettable journey.`}
						videos={["https://youtu.be/E32TzEbXkfA", "https://youtu.be/IjgcBN4GD8g"]}
					/>
					<Interview
						images={[emma1, emma2, emma3]}
						name="Emma"
						text={`Emma is a truly remarkable individual whose passion for the Irish language knows no bounds. Working for an esteemed international education organization, she shares her profound knowledge and love for Gaelic with others, having once been a dedicated Gaelic teacher herself. With a university education centered around the study of this ancient language, Emma now speaks it with flawless fluency, an authentic representation of her deep connection to its roots. Her advocacy for the language is unwavering, as she firmly believes in its essential role in Irish society. Emma's intelligence is evident in her extensive understanding of Gaelic's significance, and her kindness knows no bounds. Residing in the vibrant heart of Dublin, she is in a constant state of learning, always seeking to expand her horizons through books, art, and culture. Emma's presence is captivating, and her enthusiasm for Gaelic is infectious, leaving an indelible mark on all those lucky enough to encounter her. As she continues to inspire others with her boundless passion, her dedication to preserving and promoting the Irish Gaelic language remains an enduring testament to her exceptional character.`}
						videos={["https://youtu.be/q6nK48mHrDk", "https://youtu.be/o_H40qfAo_s", "https://youtu.be/HD9Aghab-1Y"]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Interviews;
