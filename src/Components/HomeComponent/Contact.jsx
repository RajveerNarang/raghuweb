import React from 'react'

import Modal from '@components/Basics/Modal/Modal'

const Contact = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		Contact
	</Modal>
  )
}

export default Contact
