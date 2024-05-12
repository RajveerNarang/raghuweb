import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from '@components/Basics/Loader/Loader';
const Login = lazy(() => import('@src/pages/Login'));
const Home = lazy(() => import('@src/pages/Home'))
const About = lazy(() => import('@src/pages/About'))
const Contact = lazy(() => import('@src/pages/Contact'))
const Skills = lazy(() => import('@src/pages/Skills'))
const Projects = lazy(() => import('@src/pages/Projects'))

/**
 * Renders the routing component.
 *
 * @param {string} className - The CSS class name for the component.
 * @return {JSX.Element} The rendered routing component.
 */
const Routing = ({ className }) => (
	<div className={className}>
		<Routes>
			<Route path={'/' || '/home'}
				element={
				<Suspense fallback={<Loader />}>
					<Home />
				</Suspense>
				} 
			/>
			<Route path='about' 
				element={
				<Suspense fallback={<Loader />}> 
					<About />
				</Suspense>
				} 
			/>
			<Route path='contact' 
				element={
				<Suspense fallback={<Loader />}>
					<Contact />
				</Suspense>
				} 
			/>
			<Route path='skills' 
				element={
				<Suspense fallback={<Loader />}>
					<Skills />
				</Suspense>
				} 
			/>
			<Route path='projects' 
				element={
				<Suspense fallback={<Loader />}>
					<Projects />
				</Suspense>
				} 
			/>
			<Route path='login' 
				element={
				<Suspense fallback={<Loader />}>
				  <Login />
				</Suspense>
				} 
			/>
		</Routes>
	</div>
)

export default Routing
