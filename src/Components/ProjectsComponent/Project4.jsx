import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import styles from '@components/ProjectsComponent/projects.module.scss'
import spaceShoot from '@images/spaceShoot.png'
import SimpleImage from '@components/Basics/Image/SimpleImage'

const Project4 = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
	return (
		<Modal
			isOpen={isCurrentOpen}
			onClose={handleClose}
			heading={heading}
		>
			<a href="https://space-shooting-six.vercel.app/" target='_blank' style={{color: '#ff5c00', borderBottom: '1px dashed'}}>Live link</a>
			<Paragraph className={`${styles.paraSpace}`} content="Developed a space-shooting game where the player remains centered, shooting enemies that are attracted to their position. Utilized collision detection, physics-based movement, and responsive controls for an engaging gameplay experience." />
			<Paragraph className={`${styles.paraSpace}`} content="Below is an image that gives a glimpse of how it will look like, designed using Tailwind CSS and made functional with GSAP for high-performance animations:" />
			<SimpleImage path={spaceShoot} alt={'Space Shooting'} />
		</Modal>
	)
}

export default Project4
