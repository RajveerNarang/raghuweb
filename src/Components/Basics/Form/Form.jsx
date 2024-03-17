import React, { useState } from 'react'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/Basics/Form/form.module.scss'

const Form = () => {

	const [emailValue, setEmailValue] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log('Email submitted: ', emailValue);
		setEmailValue('')
	};
	const handleChange = (e) => {
	  setEmailValue(e.target.value)
	}

  return (
	<form onSubmit={handleSubmit} className={`${styles.form}`}>
		<Input 
			inputType="email" 
			inputNameId="email" 
			labelText="Email" 
			inputValue={emailValue}
			onChangeHandler={handleChange}
		/>
		<ButtonReshaped 
			id="submit" 
			name="Submit" 
			additionalClass={styles.form_btn}
			attr={{type: "submit"}}
		/>
	</form>
  )
}

export default Form