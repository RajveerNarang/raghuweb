import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skillset from './components/Skillset/Skillset'
import Projects from './components/Projects/Projects'

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/skills' element={<Skillset />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
