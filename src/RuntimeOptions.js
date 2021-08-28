import SlideMenu from './SlideMenu';
import WordSection from './WordSection';

function RuntimeOptions() {
	const speedMenu = (
		<SlideMenu options={["Slow", "Medium", "Fast"]} initial={1} />
	);
	const tuneMenu = (
		<SlideMenu options={["AMSynth", "FMSynth", "Mono Synth", "Membrane Synth"]} initial={0} />
	);

	return (
		<div className="RuntimeOptions">
			<WordSection title="Speed" content={speedMenu} />
			<WordSection title="Tune" content={tuneMenu} />
		</div>
	);
}

export default RuntimeOptions;
