import React, { useState, useRef, useEffect } from 'react'
import styles from '@components/Basics/Input/input.module.scss'
import PropTypes from 'prop-types'

const Input = ({inputType, labelText, inputNameId, additionalStyle}) => {
	const [inputValue, setInputValue] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);

	const handleChange = (e) => {
	  setInputValue(e.target.value);
	};

	const handleFocus = () => {
		setIsFocused(true)
	};
	const handleBlur = () => {
		setIsFocused(false)
	};

	useEffect(() => {
		if (inputRef && (inputValue || document.activeElement === inputRef.current)) {
			inputRef.current?.focus();
		}
	}, [inputValue]);
  
	return (
	  <div className={`${styles.container}  ${isFocused || inputValue ? `${styles.focused}`: ''}`} style={{...additionalStyle}}>
		<label htmlFor={inputNameId} >{labelText}</label>
		<input
		  type={inputType}
		  id={inputNameId}
		  name={inputNameId}
		  className={styles.input}
		  ref={inputRef}
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
	additionalStyle: PropTypes.object,
  };

export default Input