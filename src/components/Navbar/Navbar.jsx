import React from 'react'
import { Link } from 'react-router-dom'

import navbar from './navbar.module.css'

function Navbar() {
	return (
		<div className={navbar.nav__bar}>
			<div className={navbar.left__nav__link}>
				<Link className={navbar.nav__link} to='/'>Home</Link>
			</div>
			<div className={navbar.right__nav__link}>
				<Link className={navbar.nav__link} to='/about'>About</Link>
				<Link className={navbar.nav__link} to='/contact'>Contact</Link>
				<Link className={navbar.nav__link} to='/skills'>Skills</Link>
				<Link className={navbar.nav__link} to='/projects'>Projects</Link>
				
			</div>
		</div>
	)
}

export default Navbar
