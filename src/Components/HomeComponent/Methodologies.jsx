import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'

/**
 * Renders a modal component with a methodology description.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.isCurrentOpen - Indicates if the modal is currently open.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {string} props.heading - The heading for the modal.
 * @return {JSX.Element} The rendered modal component with a methodology description.
 */
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
