import React from 'react'

import ButtonReshaped from '@components/Basics/Button/ButtonReshaped';
import styles from "@components/SkillsComponent/skill.module.scss";

const BtnGroup = ({categoryAssign}) => {

	const items = {
		'frontend': 'Frontend', 
		'backend': 'Backend',
		'other': 'Others',
		'journey': 'Journey'
	}
	const handleCategoryAssign = (name) => {
		categoryAssign(name)
	}
  return (
	<div className={`${styles.btnFlex}`}>
		{Object.entries(items).map(([key, value], index) => (
				<ButtonReshaped 
					key={key}
					id={key} 
					name={value} 
					className={styles.btnFlex__item} 
					onClick={() => handleCategoryAssign(value)} 
					attr = {{style: { animation: `slideRight ${(index + 1) * 0.3}s ease-in` }}}
				/>
			)
		)}
    </div>
  )
}

export default BtnGroup
