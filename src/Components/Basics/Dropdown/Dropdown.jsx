import React from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Dropdown/dropdown.module.scss'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import File from '@components/Basics/File/File'
import Paragraph from '@components/Basics/Variables/Paragraph'

const Dropdown = (props) => {
	const {title, data, additionalClass, isOpen, toggleDropdown} = props

  return (
	<div className={`${styles.container} ${additionalClass || ''}`}>
		<div className={`${styles.dropdownBtn}`} onClick={toggleDropdown}> {title} </div>
		<div className={`${styles.dropdownContent} ${isOpen ? styles.slideDownAnimation : styles.slideUpAnimation}`}>
			{data.content ? <Paragraph content={data.content}/> : null}
			{data.lists ? <UnorderedList lists={data.lists} additionalClass={styles.list_item}/> : null}
			{data.path ? <File path={data.path} name={data.name} /> : null}
		</div>
		
	</div>
  )
}

Dropdown.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}

export default Dropdown