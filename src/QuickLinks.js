import { useState } from "react";

function QuickLinks() {
	const names = ["Quick", "Selection", "Bubble", "Insertion", "Merge"];
	const [selected, setSelected] = useState(null);
	
	const handleClick = (e) => {
		setSelected(e.target.id);
	};

	const links = [];
	for (let name of names) {
		links.push((
			<div className={name === selected ? "linkContainer selected" : "linkContainer"} onClick={handleClick}>
				<div className="link" id={name}>
					{name}
					<div className="glowbar"></div>
				</div>
			</div>
		));
	}

	return (
		<div className="QuickLinks">
			{links}
		</div>
	);
}

export default QuickLinks;
