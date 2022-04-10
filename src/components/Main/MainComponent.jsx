import React from 'react'
import { Route, Routes } from 'react-router-dom'

import main from './main.module.css'

import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Skillset from '../Skillset/Skillset'
import Projects from '../Projects/Projects'
import ContainerComponent from '../Designs/Container/ContainerComponent'

function MainComponent() {
  return (
	<div className={main.component_container}>
		<Routes>
			<Route index path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/skills' element={<Skillset />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/designs' element={<ContainerComponent />} />
		</Routes>
	</div>
  )
}

export default MainComponent