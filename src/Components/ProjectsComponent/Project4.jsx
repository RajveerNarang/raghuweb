import React from 'react'

import Modal from '@components/Basics/Modal/Modal'

const Project4 = (props) => {
	// link: https://space-shooting-sex.vercel.app/
	const { isCurrentOpen, handleClose, heading } = props
	return (
		<Modal
			isOpen={isCurrentOpen}
			onClose={handleClose}
			heading={heading}
		>
			Project 4
		</Modal>
	)
}

export default Project4
