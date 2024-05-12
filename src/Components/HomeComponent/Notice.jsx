import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'

/**
 * Renders a notice modal component.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} props.isCurrentOpen - Indicates if the modal is currently open.
 * @param {function} props.handleClose - The function to handle closing the modal.
 * @param {string} props.heading - The heading for the modal.
 * @return {JSX.Element} The rendered notice modal component.
 */
const Notice = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
  return (
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		<Paragraph content="While you're welcome to explore the site freely, kindly note that the login feature is currently under development and won't have a significant impact on your browsing experience at this time. If you have any questions or feedback, feel free to reach out via the contact form provided. Your input is highly valued and will help shape the future development of this platform." />
	</Modal>
  )
}

export default Notice
