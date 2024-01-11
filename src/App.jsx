import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import V1Container from './v1Components/V1Container';
import Main from './Components/MainComponent/Main';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/v1/*' element={<V1Container />} />
				<Route path='/*' element={<Main />} />
			</Routes>	
		</Router>
	);
}

export default App;
