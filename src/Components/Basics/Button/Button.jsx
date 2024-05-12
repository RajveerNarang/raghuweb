import React from 'react'
import styles from '@components/Basics/Button/button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

/**
 * Renders a button component with optional icon and text.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The text to be displayed on the button.
 * @param {string} props.id - The id of the button.
 * @param {Object} props.iconName - The icon to be displayed on the button.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {string} props.className - The additional class name for the button.
 * @param {Object} props.attr - The additional attributes for the button.
 * @return {JSX.Element} The rendered button component.
 */
const Button = (props) => {
  
  const {name, id, iconName, onClick, className, attr} = props

	return (
		<button id={id} className={`${styles.btn} ${styles.btn__responsive } ${className || ''}`} onClick={onClick} {...attr || null}>
			{iconName ? <FontAwesomeIcon icon={iconName} className={`${styles.icon}`} /> : null}
			{name ? <span className={`${styles.text}`}>{name}</span> : null}
		</button>
	)
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  iconName: PropTypes.object,
  onClick: PropTypes.oneOfType([
    PropTypes.func,    // Function
    PropTypes.string,  // String (URL)
  ]),
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.object,
    PropTypes.array
  ])
};


export default Button
