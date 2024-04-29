import React from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/NavbarComponent/navbar.module.scss'
import DesktopNav from '@components/NavbarComponent/DesktopNav'
import MobileNav from '@components/NavbarComponent/MobileNav'

const Navbar = () => {

	const isDesktop = useMediaQuery({minWidth: 767})

  return (
	<nav className={`${styles.navbar}`}>
		{isDesktop ? <DesktopNav /> : <MobileNav /> }
	</nav>
  )
}

export default Navbar