import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import styles from '@components/ProjectsComponent/projects.module.scss'
import aioLists from '@images/aioLists.png'
import SimpleImage from '@components/Basics/Image/SimpleImage'

const Project3 = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
	return (
		<Modal
			isOpen={isCurrentOpen}
			onClose={handleClose}
			heading={heading}
		>
			<a href="https://aio-lists.vercel.app/" target='_blank' style={{color: '#ff5c00', borderBottom: '1px dashed'}}>Live link</a>
			<Paragraph className={`${styles.paraSpace}`} content="Developed a Vite-React web application for managing shopping and todo lists, featuring dynamic state management and list export functionality. Utilized React hooks for state management and ensured a responsive UI." />
			<Paragraph className={`${styles.paraSpace}`} content="Below is an image that gives a glimpse of how it will look like, designed using Tailwind CSS:" />
			<SimpleImage path={aioLists} alt={'All In One Lists'} />
		</Modal>
  )
}

export default Project3
