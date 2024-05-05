import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'

const Methodologies = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		<Paragraph content="In crafting this platform, I've adopted a mobile-first approach and integrated a range of cutting-edge technologies to deliver a compelling user experience. Additionally, I've emphasized component reusability and leveraged absolute paths to enhance code organization and maintainability." />
	</Modal>
  )
}

export default Methodologies
