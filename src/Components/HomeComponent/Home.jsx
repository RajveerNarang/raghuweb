import React from 'react'

import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'
import OrderedList from '@components/Basics/Variables/OrderedList'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import Stars from '@components/Basics/Canvas/Stars'

import homeData from '@json/home.json'
import { Link } from 'react-router-dom'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

const Home = () => {

  return (
	<div className={`${styles.container}`}>
    <Stars limit='275' />
    <GlassCard id={'homeGlassCard'} additionalClass={`${styles.box}`}>
      <Header text={homeData.header} level={1} />
      <Paragraph content={homeData.content} />
      <div className={styles.list_group}>
        <OrderedList lists={homeData.lists} additionalClass={`${styles.list_item}`}/>
        <UnorderedList lists={homeData.lists} additionalClass={styles.list_item}/>
      </div>
      <Paragraph content={homeData.content} />
    </GlassCard>
    <Link to={'#'} className={`${styles.animate} ${styles.animate_1}`}>
      <ButtonReshaped id={'btn1'} name={'Get Started'} />
    </Link>
    <Link to={'#'} className={`${styles.animate} ${styles.animate_2}`}>
      <ButtonReshaped id={'btn2'} name={'Learn More'} />
    </Link>
    <Link to={'#'} className={`${styles.animate} ${styles.animate_3}`}>
      <ButtonReshaped id={'btn3'} name={'Contact Us'} />
    </Link>
    <Link to={'#'} className={`${styles.animate} ${styles.animate_4}`}>
      <ButtonReshaped id={'btn4'} name={'Download CV'} />
    </Link>
    
  </div>
  )
}

export default Home