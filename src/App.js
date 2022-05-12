import './App.css';

// Context
import { useGame } from './contexts/GameContext';

function App() {
	const { CurrentPageComponent } = useGame();

	return (
		<div className="App">
			<CurrentPageComponent />
		</div>
	);
}

export default App;
