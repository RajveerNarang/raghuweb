import React from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Dropdown/dropdown.module.scss'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import File from '@components/Basics/File/File'
import Paragraph from '@components/Basics/Variables/Paragraph'

const Dropdown = (props) => {

	const {
		title, 
		data, 
		className, 
		isOpen, 
		toggleDropdown
	} = props

	return (
		<div className={`${styles.container} ${className || ''}`}>
			<div className={styles.dropdownBtn} onClick={toggleDropdown}> {title} </div>
			<div 
				className={`${styles.dropdownContent} ${isOpen ? 
					styles.slideDownAnimation : 
					styles.slideUpAnimation
				}`}
			>
				{data.content ? <Paragraph className={`${styles.marginTop}`} content={data.content}/> : null}
				{data.lists ? <UnorderedList className={`${styles.marginTop}`} lists={data.lists}/> : null}
				{data.path ? <File className={`${styles.marginTop}`} path={data.path} name={data.name} /> : null}
			</div>
		</div>
	)
}

Dropdown.prototype = {
  title: PropTypes.string.isRequired
}

export default Dropdown

