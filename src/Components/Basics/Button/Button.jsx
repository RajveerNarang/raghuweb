import React from 'react'
import styles from '@components/Basics/Button/button.module.scss'
// import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
// import { useMediaQuery } from 'react-responsive'

const Button = (props) => {
  
  const {name, id, iconClass, onClick, additionalClass, attr, isRect} = props

  return (
    <button id={id} className={`${styles.btn} ${styles.btn__responsive } ${additionalClass}`} onClick={onClick} {...attr || null}>
      {iconClass ? <FontAwesomeIcon icon={iconClass} className={`${styles.icon}`} /> : null}
      {name ? <span className={`${styles.text}`}>{name}</span> : null}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  iconClass: PropTypes.object,
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


export default Button