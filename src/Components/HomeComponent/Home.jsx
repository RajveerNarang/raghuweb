import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'

import homeData from '@json/home.json'
import List from '@components/Basics/Variables/List'

const Home = () => {
  return (
	<div className={`${styles.container}`}>
    <GlassCard additionalClass={`${styles.box}`}>
      <Header text={homeData.header} level={1} />
      <Paragraph content={homeData.content} />
      <div className={styles.list_group}>
        <List lists={homeData.lists} type={'u'} additionalClass={`${styles.list_item} ${styles.list_style_none}`}/>
        <List lists={homeData.lists} type={'o'} additionalClass={styles.list_item}/>
      </div>
      <Paragraph content={homeData.content} />
    </GlassCard>
  </div>
  )
}

export default Home