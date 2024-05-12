import React, { lazy } from 'react'
import { useMediaQuery } from 'react-responsive'

import styles from '@components/MainComponent/main.module.scss'

import Navbar from '@src/pages/Navbar'
import Routing from '@components/MainComponent/Routing'
import Stars from '@components/Basics/Canvas/Stars'

/**
 * Renders a responsive navbar component based on the screen size.
 *
 * @return {JSX.Element} The rendered navbar component.
 */
const Main = () => {

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
