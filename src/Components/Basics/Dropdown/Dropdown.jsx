import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Dropdown/dropdown.module.scss'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import File from '@components/Basics/File/File'
import Paragraph from '@components/Basics/Variables/Paragraph'

const Dropdown = (props) => {
	const {title, data, additionalClass, isOpen, toggleDropdown} = props

	const [initialRender, setInitialRender] = useState(true);

	const handleDropdownAnimation = () => {
		toggleDropdown();

		const dropdownContent = document.querySelector('.' + styles.dropdownContent);
		const isExist = dropdownContent.classList.contains(styles.slideDownAnimation)
		// console.log(isExist, initialRender);

		if (isExist && initialRender) {
			dropdownContent.classList.remove(styles.preload);
			dropdownContent.classList.add(styles.slideUpAnimation);
			setInitialRender(false)
		}
	};

	return (
		<div className={`${styles.container} ${additionalClass || ''}`}>
			<div className={`${styles.dropdownBtn}`} onClick={handleDropdownAnimation}> {title} </div>
			<div 
				className={`${styles.dropdownContent} ${isOpen ? 
					styles.slideDownAnimation : 
					initialRender ? styles.preload : styles.slideUpAnimation
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
