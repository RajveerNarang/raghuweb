import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from '@components/Basics/Loader/Loader';
const Login = lazy(() => import('@components/LoginComponent/Login'));
const Home = lazy(() => import('@components/HomeComponent/Home'))
const About = lazy(() => import('@components/AboutComponent/About'))
const Contact = lazy(() => import('@components/ContactComponent/Contact'))
const Skills = lazy(() => import('@components/SkillsComponent/Skills'))
const Projects = lazy(() => import('@components/ProjectsComponent/Projects'))

// use framer motion hint: https://www.youtube.com/watch?v=FdrEjwymzdY&ab_channel=PedroTech
const Routing = ({ additionalClass }) => {
  return (
	<div className={additionalClass}>
		<Routes>
			<Route path='' 
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
}

export default Routing
