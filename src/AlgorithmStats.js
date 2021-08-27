import { useEffect, useState } from "react";
import WordSection from "./WordSection";

function AlgorithmStats({ type }) {
	const [complexity, setComplexity] = useState(null);
	const [stats, setStats] = useState((
		<div className="stats" style={{
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-start",
		}}>
			<div>
				<p>Time Elapsed:</p>
				<p>Comparisons:</p>
				<p>Swaps:</p>
			</div>
			<div>
				<p>00:00</p>
				<p>0</p>
				<p>0</p>
			</div>
		</div>
	));

	useEffect(() => {
		fetch(`http://localhost:8000/${type}`)
		.then(res => res.json())
		.then((data) => {
			setComplexity((
				<div className="stats" style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
				}}>
					<div>
						<p><span className="highlight">
							Best Time:
						</span></p>
						<p>Average Time:</p>
						<p>Worst Time:</p>
						<p><span className="highlight">
							Best Space:
						</span></p>
					</div>
					<div>
						<p><span className="highlight">
							{data["complexity"]["bestTime"]}
						</span></p>
						<p>{data["complexity"]["averageTime"]}</p>
						<p>{data["complexity"]["worstTime"]}</p>
						<p><span className="highlight">
							{data["complexity"]["bestSpace"]}
						</span></p>
					</div>
				</div>
			));
		});
	}, []);

	return (
		<div className="AlgorithmInfo">
			{complexity && <WordSection title="Complexity" content={complexity} />}
			<WordSection title="Stats" content={stats} />
		</div>
	);
}

export default AlgorithmStats;
