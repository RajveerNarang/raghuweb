import React, { lazy } from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/MainComponent/main.module.scss'

import Navbar from '@src/pages/Navbar'
const Routing = lazy(() => import('@components/MainComponent/Routing'))
import Stars from '@components/Basics/Canvas/Stars'

function Main() {

  const isDesktop = useMediaQuery({minWidth: 767})

  return (
	<main className={styles.container}>
    <Stars limit={isDesktop ? '275' : '137'} />
    <Navbar />
    <Routing className={styles.router} />
  </main>
  )
}

export default Main
