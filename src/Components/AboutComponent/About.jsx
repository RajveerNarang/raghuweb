import React from 'react'

import Dropdown from '@components/Basics/Dropdown/Dropdown'
import styles from '@components/AboutComponent/about.module.scss'

import aboutData from '@json/about.json'

const About = () => {
  return (
	<div className={`${styles.container}`}>
    <Dropdown data={aboutData.titles} />
    {/* <Dropdown title='About2' /> */}
  </div>
  )
}

export default About