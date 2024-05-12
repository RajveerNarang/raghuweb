import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

import styles from '@components/Basics/Modal/modal.module.scss'
import Header from '@components/Basics/Variables/Header'

/**
 * Renders a modal component with optional content and a header.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isOpen - Indicates if the modal is currently open.
 * @param {Function} props.onClose - The function to close the modal.
 * @param {ReactNode} props.children - The content to be displayed in the modal.
 * @param {string} props.heading - The heading for the modal.
 * @param {string} props.className - The additional CSS class for the modal.
 * @param {number} props.level - The heading level for the modal (default: 2).
 * @return {JSX.Element} The rendered modal component.
 */
const Modal = (props) => {
	const { isOpen, onClose, children, heading, className, level } = props
	if (!isOpen) return null;

	/**
	 * Handles the click event on the overlay.
	 *
	 * @param {Event} event - The click event object.
	 * @return {void} This function does not return anything.
	 */
	const handleOverlayClick = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}

	return (
		<motion.div 
			className={`${styles.overlay}`} 
			onClick={handleOverlayClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: isOpen ? 1 : 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div 
				className={`${styles.modal} ${className || ''}`}
				initial={{ scale: 0.5 }}
				animate={{ scale: isOpen ? 1 : 0.5 }}
				transition={{ duration: 0.3 }}
			>
				<div className={`${styles.header}`}>
					<Header level={level || 2} text={heading} />	
					<FontAwesomeIcon icon={faXmark} className={`${styles.close}`} onClick={onClose}/>
				</div>
				{children}
			</motion.div>
		</motion.div>
	);
}

Modal.prototype = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	heading: PropTypes.string.isRequired,
	className: PropTypes.string,
}

export default Modal
