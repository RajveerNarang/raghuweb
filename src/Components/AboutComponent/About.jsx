import React, { useState } from 'react'

import Dropdown from '@components/Basics/Dropdown/Dropdown'
import styles from '@components/AboutComponent/about.module.scss'

import aboutData from '@json/frontend/about.json'
// Re animate https://codepen.io/hrtzt/pen/NPZKRN
const About = () => {
	const [openIndex, setOpenIndex] = useState(null)
  
	const toggleDropdown = (index) => {
	  setOpenIndex(openIndex === index ? null : index)
	}

  return (
    <div className={`${styles.container}`}>
      {aboutData ? aboutData.map((titles, index) => (
        <Dropdown 
          key={index} 
          title={titles.title} 
          data={titles.data}
          isOpen={openIndex === index} 
          toggleDropdown={() => toggleDropdown(index)} 
		/>
      )) : null}
    </div>
  )
}

export default About

