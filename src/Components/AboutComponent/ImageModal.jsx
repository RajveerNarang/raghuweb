import React from 'react'
import SimpleImage from '@components/Basics/Image/SimpleImage'
import Modal from '@components/Basics/Modal/Modal'

const ImageModal = (props) => {
	const { isCurrentOpen, handleClose, heading, path } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
		level={4} 
	>
		<SimpleImage path={path} alt={heading} />
	</Modal>
  )
}

export default ImageModal
