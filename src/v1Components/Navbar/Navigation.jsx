import React, {Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import navbar from './navbar.module.css'
import SvgBurger from './SvgBurger'

function Navigation() {

	const [widthDimension, setWidthDimension] = useState(null)
	const [toggle, setToggle] = useState(true)
	
	useEffect(() => {
	  setWidthDimension(window.innerWidth)
	}, [])

	useEffect(() => {
		const handleResize = () => {
			setWidthDimension(window.innerWidth);
		}
	
		window.addEventListener("resize", handleResize);
		
		return () => window.removeEventListener("resize", handleResize);
	}, [])

	const handleToggle = () => {
		setToggle(!toggle)
	}
		
	return (
		<div className={navbar.nav__bar}>
			{widthDimension >= 700 ? 
			<Fragment>
				<div className={navbar.left__nav__link}>
					<Link className={navbar.nav__link} to='/v1/'>Home</Link>
				</div>
				<div className={navbar.right__nav__link}>
					<Link className={navbar.nav__link} to='/v1/about'>About</Link>
					<Link className={navbar.nav__link} to='/v1/contact'>Contact</Link>
					<Link className={navbar.nav__link} to='/v1/skills'>Skills</Link>
					<Link className={navbar.nav__link} to='/v1/projects'>Projects</Link>	
				</div>
			</Fragment>
			: <Fragment>
				<div className={navbar.mobile_navbar}>
					<div className={navbar.nav_toggle} onClick={handleToggle}>
						<SvgBurger />
					</div>
					<div className={toggle ? navbar.nav_link_toggle_none : navbar.nav_link_toggle_flex}>
						<Link className={navbar.nav__link} to='/' onClick={handleToggle}>Home</Link>
						<Link className={navbar.nav__link} to='/about' onClick={handleToggle}>About</Link>
						<Link className={navbar.nav__link} to='/contact' onClick={handleToggle}>Contact</Link>
						<Link className={navbar.nav__link} to='/skills' onClick={handleToggle}>Skills</Link>
						<Link className={navbar.nav__link} to='/projects' onClick={handleToggle}>Projects</Link>
					</div>
				</div>
			</Fragment> }
		</div>
	)
}

export default Navigation
