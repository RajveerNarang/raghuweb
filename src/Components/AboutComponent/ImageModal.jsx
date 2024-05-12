import React from 'react'
import SimpleImage from '@components/Basics/Image/SimpleImage'
import Modal from '@components/Basics/Modal/Modal'

/**
 * Renders an image modal component.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.isCurrentOpen - Indicates if the modal is currently open.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {string} props.heading - The heading for the modal.
 * @param {string} props.path - The path to the image.
 * @return {JSX.Element} The rendered image modal component.
 */
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
