import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import LinkGroup from '@components/HomeComponent/LinkGroup'

import homeData from '@json/frontend/home.json'

const Home = () => {

  return (
	<div className={`${styles.container}`}>
		<GlassCard id={'homeGlassCard'} className={`${styles.box}`}>
			<Header text={homeData.header} level={1} />
			<Paragraph content={homeData.content} />
			<UnorderedList lists={homeData.lists} className={styles.list_group}/>
			<Paragraph content={homeData.content} />
		</GlassCard>
		<LinkGroup />
  </div>
  )
}

export default Home
