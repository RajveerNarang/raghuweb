import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import HomeContent from '@components/HomeComponent/HomeContent'

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {
	return (
		<div className={`${styles.container}`}>
			<HomeContent />
		</div>
	)
}

export default Home
