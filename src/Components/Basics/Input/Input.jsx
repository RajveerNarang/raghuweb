import React, { useState } from 'react'
import styles from '@components/Basics/Input/input.module.scss'
import PropTypes from 'prop-types'

/**
 * Renders an input component with a label and handles focus state.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.inputType - The type of input.
 * @param {string} props.labelText - The text for the label.
 * @param {string} props.inputNameId - The id and name for the input.
 * @param {Object} props.additionalStyle - Additional styles for the container.
 * @param {string} props.inputValue - The current value of the input.
 * @param {Function} props.handleChange - The function to handle input changes.
 * @return {JSX.Element} The rendered input component.
 */
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

	/**
	 * Sets the focus state to true when the input is focused.
	 *
	 * @return {void} No return value.
	 */
	const handleFocus = () => {
		setIsFocused(true)
	};

	/**
	 * Sets the focus state to false when the input loses focus.
	 *
	 * @return {void} No return value.
	 */
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
