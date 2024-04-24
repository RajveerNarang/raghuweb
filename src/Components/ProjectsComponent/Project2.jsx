import React from 'react'

import Modal from '@components/Basics/Modal/Modal'

const Project2 = (props) => {
  
	const { isCurrentOpen, handleClose, heading } = props
	return (
	  <Modal
		  isOpen={isCurrentOpen}
		  onClose={handleClose}
		  heading={heading}
	  >
		  Project 2
	  </Modal>
	)
}

export default Project2
