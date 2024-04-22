import React, { Fragment, useState } from 'react'
import styles from '@components/ProjectsComponent/projects.module.scss'

import projectData from '@json/frontend/projects.json'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'
import Modal from '@components/Basics/Modal/Modal'

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(null)
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = (index) => {
		setIsOpen(true)
		setCurrentIndex(index)
	}
	const handleClose = () => {
		setIsOpen(false)
	}

  return (
	<div className={`${styles.container}`}>
		{projectData.map((item, index) => (
			<Fragment key={index}>
				<GlassCard id={`project${index}`} className={styles.animate} handleClick={() => handleOpen(index)}>
					<Header level={3} text={item.heading} />
				</GlassCard>
				<Modal
					isOpen={index === currentIndex && isOpen}
					onClose={handleClose}
					heading={item.heading}
				>
					<Paragraph className={styles.paraSpace} content={item.description} />
				</Modal>
			</Fragment>
		))}
	</div>
  )
}

export default Projects
