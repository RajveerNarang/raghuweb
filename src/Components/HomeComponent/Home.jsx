import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'
import OrderedList from '@components/Basics/Variables/OrderedList'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import Stars from '@components/Basics/Canvas/Stars'

import homeData from '@json/home.json'

const Home = () => {
  return (
	<div className={`${styles.container}`}>
    <Stars limit='275' />
    <GlassCard additionalClass={`${styles.box}`}>
      <Header text={homeData.header} level={1} />
      <Paragraph content={homeData.content} />
      <div className={styles.list_group}>
        <OrderedList lists={homeData.lists} additionalClass={`${styles.list_item}`}/>
        <UnorderedList lists={homeData.lists} additionalClass={styles.list_item}/>
      </div>
      <Paragraph content={homeData.content} />
    </GlassCard>
  </div>
  )
}

export default Home