import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import styles from '@components/Basics/Button/button.module.scss'

const ButtonReshaped = (props) => {
	const {name, id, iconName, onClick, additionalClass, attr} = props

	return (
	  <button id={id} className={`${styles.btn} ${styles.btn__rect} ${additionalClass}`} onClick={onClick} {...attr || null}>
		{iconName ? <FontAwesomeIcon icon={iconName} className={`${styles.icon}`} /> : null}
		{name ? <span className={`${styles.textShow}`}>{name}</span> : null}
	  </button>
	)
}

ButtonReshaped.propTypes = {
	id: PropTypes.string.isRequired,
	iconName: PropTypes.object,
	onClick: PropTypes.oneOfType([
	  PropTypes.func,    // Function
	  PropTypes.string,  // String (URL)
	]),
	name: PropTypes.string.isRequired,
	additionalClass: PropTypes.oneOfType([
	  PropTypes.string, 
	  PropTypes.object,
	  PropTypes.array
	])
  };

export default ButtonReshaped