import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import HomeContent from '@components/HomeComponent/HomeContent'

const Home = () => {

  return (
	<div className={`${styles.container}`}>
		<HomeContent />
	</div>
  )
}

export default Home
