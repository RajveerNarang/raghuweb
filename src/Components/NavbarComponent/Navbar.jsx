import React, { Suspense, lazy } from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/NavbarComponent/navbar.module.scss'
import Loader from '@components/Basics/Loader/Loader'
// import DesktopNav from '@components/NavbarComponent/DesktopNav'
// import MobileNav from '@components/NavbarComponent/MobileNav'

const DesktopNav = lazy(() => import('@components/NavbarComponent/DesktopNav'))
const MobileNav = lazy(() => import('@components/NavbarComponent/MobileNav'))

const Navbar = () => {

	const isDesktop = useMediaQuery({minWidth: 767})

  return (
	<nav className={`${styles.navbar}`}>
		{isDesktop ? 
			<Suspense fallback={<Loader />}>
				<DesktopNav />
			</Suspense> 
			: <Suspense fallback={<Loader />}>
				<MobileNav />
			</Suspense> 
		}
	</nav>
  )
}

export default Navbar