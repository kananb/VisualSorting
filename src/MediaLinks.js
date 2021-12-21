import github from './github.svg';
import linkedin from './linkedin.svg';

function MediaLinks() {
	return (
		<div className="MediaLinks">
			<div className="link">
				<a href="https://github.com/kananb" target="_blank" rel="noreferrer">
					<img src={github} alt="github logo" />
					source code
				</a>
			</div>
			<div className="link">
				<a href="https://www.linkedin.com/in/kananb/" target="_blank" rel="noreferrer">
					<img src={linkedin} alt="linkedin logo" />
					linkedin
				</a>
			</div>
		</div>
	);
}

export default MediaLinks;
