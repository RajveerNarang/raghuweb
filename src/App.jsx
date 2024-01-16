import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

// import V1Container from '@src/v1Components/V1Container';
import Main from '@components/MainComponent/Main';
import Loader from '@components/Basics/Loader/Loader';

const V1Container = lazy(() => import('@src/v1Components/V1Container'));

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/v1/*' element={
				<Suspense fallback={<Loader />}>
					<V1Container />
				</Suspense>} />
				<Route path='/*' element={<Main />} />
			</Routes>	
		</Router>
	);
}

export default App;
