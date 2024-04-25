import React, { useState } from 'react'
import styles from '@components/Basics/Input/input.module.scss'
import PropTypes from 'prop-types'

const Input = (props) => {
	const {
		inputType, 
		labelText, 
		inputNameId,  
		additionalStyle,
		inputValue,
		handleChange
	} = props

	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true)
	};
	const handleBlur = () => {
		setIsFocused(false)
	};

	return (
	  <div className={`${styles.container}  ${isFocused || inputValue ? `${styles.focused}`: ''}`} style={{...additionalStyle}}>
		<label htmlFor={inputNameId} >{labelText}</label>
		<input
		  type={inputType}
		  id={inputNameId}
		  name={inputNameId}
		  className={styles.input}
		  value={inputValue}
		  onChange={handleChange}
		  onFocus={handleFocus}
		  onBlur={handleBlur}
		  autoComplete={inputNameId}
		/>
	  </div>
	);
}

Input.propTypes = {
	inputType: PropTypes.string.isRequired, 
	labelText: PropTypes.string.isRequired, 
	inputNameId: PropTypes.string.isRequired,
	additionalStyle: PropTypes.object
  };

export default Input
