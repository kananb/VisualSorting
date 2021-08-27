import { useEffect, useState } from "react";
import WordSection from "./WordSection";

function HomeInfo() {
	const [about, setAbout] = useState(null);
	const [controls, setControls] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/home")
		.then(res => res.json())
		.then((data) => {
			setAbout(data["about"]);
			setControls(data["controls"]);
		});
	}, []);

	return (
		<div className="HomeInfo">
			{about && <WordSection title="About" content={about} line={true} />}
			{controls && <WordSection title="Controls" content={controls} line={true} />}
		</div>
	);
}

export default HomeInfo;
