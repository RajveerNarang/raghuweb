import React from 'react'

import ButtonReshaped from '@components/Basics/Button/ButtonReshaped';
import styles from "@components/SkillsComponent/skill.module.scss";

const BtnGroup = ({categoryAssign}) => {

	const handleCategoryAssign = (name) => {
		categoryAssign(name)
	}
  return (
	<div className={`${styles.btnFlex}`}>
      <ButtonReshaped 
        id={'frontend'} 
        name={'Frontend'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => handleCategoryAssign('Frontend')} 
      />
      <ButtonReshaped 
        id={'backend'} 
        name={'Backend'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => handleCategoryAssign('Backend')} 
      />
      <ButtonReshaped 
        id={'other'} 
        name={'Others'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => handleCategoryAssign('Others')} 
      />
      <ButtonReshaped 
        id={'journey'} 
        name={'Journey'} 
        additionalClass={styles.btnFlex__item} 
        onClick={() => handleCategoryAssign('Journey')} 
      />
    </div>
  )
}

export default BtnGroup