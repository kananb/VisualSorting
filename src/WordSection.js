function WordSection({ title, content, line=false }) {
	return (
		<div className="WordSection">
			<h2 className="title">{title.toUpperCase()}</h2>
			<div className={line ? "content line" : "content"}>
				{content}
			</div>
		</div>
	);
}

export default WordSection;
