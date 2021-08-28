import AlgorithmStats from './AlgorithmStats';
import HomeInfo from './HomeInfo';
import Navbar from './Navbar';
import MediaWindow from './MediaWindow';
import MediaLinks from './MediaLinks';
import RuntimeOptions from './RuntimeOptions';
import './Navbar.css';
import './WordSection.css';
import './AlgorithmStats.css';
import './QuickLinks.css';
import './MediaWindow.css';
import './App.css';
import './MediaLinks.css';
import './SlideMenu.css';
import './HomeInfo.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<section className="main" style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "flex-start",
			}}>
				<HomeInfo />
				<MediaWindow />
				<div>
					<AlgorithmStats type="home" />
					<RuntimeOptions />
				</div>
			</section>
			<MediaLinks />
		</div>
	);
}

export default App;
