import React, { Suspense, lazy } from 'react'

import styles from './navbar.module.scss'
import { useMediaQuery } from 'react-responsive'
// import DesktopNav from '@components/NavbarComponent/DesktopNav'
// import MobileNav from '@components/NavbarComponent/MobileNav'

const DesktopNav = lazy(() => import('@components/NavbarComponent/DesktopNav'))
const MobileNav = lazy(() => import('@components/NavbarComponent/MobileNav'))

const Navbar = () => {

	const isDesktop = useMediaQuery({minWidth: 767})

  return (
	<nav className={`${styles.navbar}`}>
		{isDesktop ? 
			<Suspense>
				<DesktopNav />
			</Suspense> 
			: <Suspense>
				<MobileNav />
			</Suspense> 
		}
	</nav>
  )
}

export default Navbar