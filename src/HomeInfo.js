import WordSection from "./WordSection";

function HomeInfo() {
	const about = "Understanding sorting algorithms has never been a simple task. Even an algorithm like bubble sort can be confusing to learn about if it’s not presented the right way. So, this site was created to help visualize the way each algorithm works and learn about the differences between them.";
	const controls = "This algorithm was created in 1928 by the computer science dude Alan Turner because he wanted to do stuff and the time complexity was decided by his wife Maria.";

	return (
		<div className="HomeInfo">
			{about && <WordSection title="About" content={about} line={true} />}
			{controls && <WordSection title="Controls" content={controls} line={true} />}
		</div>
	);
}

export default HomeInfo;
