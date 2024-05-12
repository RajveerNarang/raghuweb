import React, { useState } from 'react'
import styles from '@components/Basics/Input/input.module.scss'
import PropTypes from 'prop-types'

/**
 * Renders a textarea component with a label and styling.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.inputType - The type of the textarea input.
 * @param {string} props.labelText - The text to be displayed as a label.
 * @param {string} props.inputNameId - The id of the textarea input.
 * @param {Object} props.additionalStyle - Additional styles to be applied to the component.
 * @param {string} props.inputValue - The value of the textarea input.
 * @param {Function} props.handleChange - The function to be called when the textarea input changes.
 * @param {number} props.rows - The number of rows to display in the textarea.
 * @return {JSX.Element} The rendered textarea component.
 */
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
