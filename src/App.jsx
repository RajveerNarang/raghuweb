import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import V1Container from './components/V1Container';
import Elements from './mfaComponents/Basics/Elements';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/v1/*' element={<V1Container />} />
				<Route path='/' element={<Elements />} />
			</Routes>	
		</Router>
	);
}

export default App;
