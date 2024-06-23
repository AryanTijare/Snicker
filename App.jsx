// App.js
import Joke from "./Joke.jsx";

function App() {
	const Titles = ['Unleash laughter with every click: Your ultimate destination for endless giggles!Unleash laughter with every click: Your ultimate destination for endless giggles!', 'Spice up your day with our joke generator! Endless laughs await with just a click.', 'Click for instant laughs: Your ultimate joke oasis awaits!']
	function genRandomInt(max) {
		return Math.floor(Math.random() * (max + 1));
	}
	return (
		<div className="App">
			<div id='Joker'>
			</div>
			<h1>Joke Generator</h1>
			<p>{Titles[genRandomInt(2)]}</p>
			<Joke />
		</div>
	);
}

export default App;
