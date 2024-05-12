import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/NavbarComponent/navbar.module.scss'
import DesktopNav from '@components/NavbarComponent/DesktopNav'
import MobileNav from '@components/NavbarComponent/MobileNav'

/**
 * Renders a responsive navbar component based on the screen size.
 *
 * @return {JSX.Element} The rendered navbar component.
 */
const Navbar = () => {
	const isDesktop = useMediaQuery({minWidth: 767})

	return (
		<nav className={`${styles.navbar}`}>
			{isDesktop ? <DesktopNav /> : <MobileNav /> }
		</nav>
	)
}

export default Navbar
