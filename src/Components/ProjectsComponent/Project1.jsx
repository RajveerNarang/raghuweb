import React from 'react'

import Modal from '@components/Basics/Modal/Modal'

const Project1 = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		Project 1
	</Modal>
  )
}

export default Project1
