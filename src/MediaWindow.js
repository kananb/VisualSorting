import QuickLinks from './QuickLinks';

function MediaWindow() {
	return (
		<div className="MediaWindow">
			<QuickLinks />
			<div className="content">
				<div className="canvas">
				</div>
				<div className="menu">
					<div className="leftControls">
						<div className="play">Play</div>
						<div className="shuffle">Shuffle</div>
						<div className="volume">Volume</div>
					</div>
					<div className="fullscreen">Fullscreen</div>
				</div>
			</div>
		</div>
	);
}

export default MediaWindow;
