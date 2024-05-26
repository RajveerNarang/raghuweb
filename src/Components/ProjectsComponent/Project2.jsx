import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import styles from '@components/ProjectsComponent/projects.module.scss'

const Project2 = (props) => {
  
	const { isCurrentOpen, handleClose, heading } = props
	return (
		<Modal
			isOpen={isCurrentOpen}
			onClose={handleClose}
			heading={heading}
		>
			<a href="https://github.com/Raghunandan1451/howdy" target='_blank' style={{color: '#ff5c00', borderBottom: '1px dashed'}}>Github link</a>
			<Paragraph  className={`${styles.paraSpace}`} content="It is a web chat app, designed to chat with strangers and make it private for each user (University Project)" />
			<Paragraph className={`${styles.paraSpace} ${styles.scale_09}`} content="This was a team project involving five members, and my initial role was handling the backend part." />
			<Paragraph className={`${styles.paraSpace} ${styles.scale_09}`} content="We used packages like socket.io for real-time chatting, bcrypt for password encryption, and JWT to avoid requiring users to re-enter their credentials each time they visit the website." />
			<Paragraph className={`${styles.paraSpace} ${styles.scale_09}`} content="In the frontend part, I managed the website redesign and handled the deployment on Heroku. However, due to certain reasons, it is not currently in a deployed state." />
		</Modal>
	)
}

export default Project2
