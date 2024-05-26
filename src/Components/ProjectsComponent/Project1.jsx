import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import styles from '@components/ProjectsComponent/projects.module.scss'

const Project1 = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		<a href="#" style={{color: '#777', borderBottom: '1px dashed'}}>No link available for this project as it pertains to work-related activities.</a>
		<Paragraph className={`${styles.paraSpace}`} content="It is a multinational company that manufactures oral health materials and related devices and equipment. During my tenure, I held various roles and took on different responsibilities as my career progressed." />
		<Paragraph className={`${styles.paraSpace} ${styles.scale_09}`} content="My initial responsibility involved testing the project, organizing data to synchronize with the website, and drafting documentation outlining its functionality for future reference." />
		<Paragraph className={`${styles.paraSpace} ${styles.scale_09}`} content="In my backend role, I resolved website issues using tools like SonarQube, customized functionalities, managed taxonomy, configured content types, views, and modules, and adjusted site settings." />
		<Paragraph className={`${styles.paraSpace} ${styles.scale_09}`} content="In my frontend role, I was responsible for exploring new technology, specifically Storybook, and integrating its actions and controls with Drupal, which was new to our team." />
	</Modal>
  )
}

export default Project1
