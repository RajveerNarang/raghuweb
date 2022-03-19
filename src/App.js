import {BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navbar/Navigation'
import MainComponent from './components/Main/MainComponent'

function App() {
	return (
		<div>
			<Router>
				<Navigation />
				<MainComponent />	
			</Router>
		</div>
	);
}

export default App;
