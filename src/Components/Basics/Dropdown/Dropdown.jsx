import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Dropdown/dropdown.module.scss'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import File from '@components/Basics/File/File'
import Paragraph from '@components/Basics/Variables/Paragraph'

const Dropdown = (props) => {

	const [initialRender, setInitialRender] = useState(true)
	const {
		title, 
		data, 
		additionalClass, 
		isOpen, 
		toggleDropdown
	} = props

	// const handleAnimation = () => {
	// 	toggleDropdown()

	// 	const dropdownContent = document.querySelector('.' + styles.dropdownContent);
	// 	const isExist = dropdownContent.classList.contains(styles.slideDownAnimation);

	// 	if (isExist && initialRender) {
	// 		setInitialRender(false); // Assuming this triggers the animation
	// 	}
	// }

	return (
		<div className={`${styles.container} ${additionalClass || ''}`}>
			<div className={styles.dropdownBtn} onClick={toggleDropdown}> {title} </div>
			<div 
				className={`${styles.dropdownContent} ${isOpen ? 
					styles.slideDownAnimation : 
					// (!isOpen && initialRender) ? styles.preload : 
					styles.slideUpAnimation
				}`}
			>
				{data.content ? <Paragraph additionalClass={`${styles.marginTop}`} content={data.content}/> : null}
				{data.lists ? <UnorderedList additionalClass={`${styles.marginTop}`} lists={data.lists}/> : null}
				{data.path ? <File additionalClass={`${styles.marginTop}`} path={data.path} name={data.name} /> : null}
			</div>
		</div>
	)
}

Dropdown.prototype = {
  title: PropTypes.string.isRequired
}

export default Dropdown

