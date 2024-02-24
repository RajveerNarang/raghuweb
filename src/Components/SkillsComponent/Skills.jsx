import React, { useState } from 'react'

import { dataFilter, optionRender } from '@utils/charts';
import skillData from '@json/skills.json';
import styles from "@components/SkillsComponent/skill.module.scss";
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped';
import RenderedChart from './RenderedChart';


const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend")

  const filterData = dataFilter(skillData, selectedCategory);

  return (
	<div className={`${styles.container}`}>
    <div className={`${styles.btnFlex}`}>
      <ButtonReshaped 
        id={'frontend'} 
        name={'Frontend'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Frontend')} 
      />
      <ButtonReshaped 
        id={'backend'} 
        name={'Backend'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Backend')} 
      />
      <ButtonReshaped 
        id={'other'} 
        name={'Others'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Others')} 
      />
      <ButtonReshaped 
        id={'journey'} 
        name={'Journey'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => setSelectedCategory('Journey')} 
      />
    </div>
    <RenderedChart categoryGrp={selectedCategory} data={filterData} options={optionRender(filterData)} additionalClass={styles.chartEx} />
  </div>
  )
}

export default Skills