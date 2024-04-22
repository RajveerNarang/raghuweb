import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

import styles from '@components/Basics/Modal/modal.module.scss'
import Header from '@components/Basics/Variables/Header'

const Modal = (props) => {
	const { isOpen, onClose, children, heading, className } = props
	if (!isOpen) return null;

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
			<Header level={2} text={heading} />	
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
