import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';

import Loader from '@components/Basics/Loader/Loader';

const Main = lazy(() => import('@components/MainComponent/Main'));

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/*' element={
					<Suspense fallback={<Loader />}>
						<Main />
					</Suspense>
				} />
			</Routes>	
		</Router>
	);
}

export default App;
