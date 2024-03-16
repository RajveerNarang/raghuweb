import React, { lazy } from 'react'
import styles from '@components/MainComponent/main.module.scss'

const Navbar = lazy(() => import('@components/NavbarComponent/Navbar'))
const Routing = lazy(() => import('@components/MainComponent/Routing'))
import Stars from '@components/Basics/Canvas/Stars'
import { useMediaQuery } from 'react-responsive'

function Main() {

  const isDesktop = useMediaQuery({minWidth: 767})

  return (
	<main className={styles.container}>
    <Stars limit={isDesktop ? '275' : '137'} />
    <Navbar />
    <Routing additionalClass={styles.router} />
  </main>
  )
}

export default Main