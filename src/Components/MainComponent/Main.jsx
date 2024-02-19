import React, { lazy } from 'react'
import styles from '@components/MainComponent/main.module.scss'

const Navbar = lazy(() => import('@components/NavbarComponent/Navbar'))
const Routing = lazy(() => import('@components/MainComponent/Routing'))
import Stars from '@components/Basics/Canvas/Stars'

function Main() {

  return (
	<main className={styles.container}>
    <Stars limit='275' />
    <Navbar />
    <Routing additionalClass={styles.router} />
  </main>
  )
}

export default Main