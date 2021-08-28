import { useState } from "react";

function SlideMenu({ options, initial }) {
	const [selected, setSelected] = useState(initial);

	const slideLeftHandler = () => {
		if (selected > 0) setSelected(selected - 1);
	};
	const slideRightHandler = () => {
		if (selected < options.length - 1) setSelected(selected + 1);
	};

	let longestOption = options[0];
	for (let option of options) {
		if (option.length > longestOption.length) longestOption = option;
	}
	
	return (
		<div className="SlideMenu">
			<div className="slideButtonWrapper" onClick={slideLeftHandler}>
				<div className="slideLeft" />
			</div>
			<div className="option" style={{
				width: `${longestOption.length / 1.4}em`,
			}}>{options[selected]}</div>
			<div className="slideButtonWrapper" onClick={slideRightHandler}>
				<div className="slideRight" />
			</div>
		</div>
	);
}

export default SlideMenu;
