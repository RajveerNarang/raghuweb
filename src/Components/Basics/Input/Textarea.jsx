import React, { useState } from 'react'
import styles from '@components/Basics/Input/input.module.scss'
import PropTypes from 'prop-types'

const Textarea = (props) => {
	const {
		inputType, 
		labelText, 
		inputNameId,  
		additionalStyle,
		inputValue,
		handleChange,
		rows
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
		<textarea
			rows={rows || 4}
			// columns={columns || 50}
		  type={inputType}
		  id={inputNameId}
		  name={inputNameId}
		  className={styles.textarea}
		  value={inputValue}
		  onChange={handleChange}
		  onFocus={handleFocus}
		  onBlur={handleBlur}
		  autoComplete={inputNameId}
		/>
	  </div>
	);
}

Textarea.propTypes = {
	inputType: PropTypes.string.isRequired, 
	labelText: PropTypes.string.isRequired, 
	inputNameId: PropTypes.string.isRequired,
	additionalStyle: PropTypes.object,
	rows: PropTypes.number
  };

export default Textarea
