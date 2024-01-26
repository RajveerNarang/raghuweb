import React from 'react'
import { Route, Routes } from 'react-router-dom'

import main from '@src/v1Components/Main/main.module.css'

import Home from '@src/v1Components/Home/Home'
import About from '@src/v1Components/About/About'
import Contact from '@src/v1Components/Contact/Contact'
import Skillset from '@src/v1Components/Skillset/Skillset'
import Projects from '@src/v1Components/Projects/Projects'
import ContainerComponent from '@src/v1Components/Designs/Container/ContainerComponent'

function MainComponent() {
  return (
	<div className={main.component_container}>
		<Routes>
			<Route path='' element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='contact' element={<Contact />} />
			<Route path='skills' element={<Skillset />} />
			<Route path='projects' element={<Projects />} />
			<Route path='designs' element={<ContainerComponent />} />
		</Routes>
	</div>
  )
}

export default MainComponent