import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import HomeContent from '@components/HomeComponent/HomeContent'

const Home = () => {

  return (
	<div className={`${styles.container}`}>
		<GlassCard id={'homeGlassCard'} className={`${styles.box}`}>
			<HomeContent />
		</GlassCard>
  </div>
  )
}

export default Home
