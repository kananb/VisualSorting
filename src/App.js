import AlgorithmStats from './AlgorithmStats';
import HomeInfo from './HomeInfo';
import Navbar from './Navbar';
import MediaWindow from './MediaWindow';
import './Navbar.css';
import './WordSection.css';
import './AlgorithmStats.css';
import './QuickLinks.css';
import './MediaWindow.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<section className="main" style={{
				display: "flex",
				justifyContent: "space-around",
				alignItems: "flex-start",
			}}>
				<HomeInfo />
				<MediaWindow />
				<AlgorithmStats type="home" />
			</section>
		</div>
	);
}

export default App;
