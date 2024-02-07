import React from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Dropdown/dropdown.module.scss'

const Dropdown = (props) => {
	const {title, content, additionalClass, isOpen, toggleDropdown} = props

  return (
	<div className={`${styles.container} ${additionalClass || ''}`}>
		<div className={`${styles.dropdownBtn}`} onClick={toggleDropdown}> {title} </div>
		<div 
			className={`
				${styles.dropdownContent} 
				${isOpen ? styles.slideDownAnimation : styles.slideUpAnimation}
			`}>
				{content}
		</div>
		
	</div>
  )
}

Dropdown.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Dropdown