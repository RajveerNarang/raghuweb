import React, { useState } from 'react'
import axios from 'axios'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/Basics/Form/form.module.scss'

const LoginForm = () => {

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const formData = {
				email: e.target.elements.email.value,
			}
			await axios.post('/api/login', formData)

		} catch (error) {
			console.error('Login Failed', error.message)
		}
	};


  return (
	<form onSubmit={handleSubmit} className={`${styles.form}`}>
		<Input 
			inputType="email" 
			inputNameId="email" 
			labelText="Email" 
		/>
		<ButtonReshaped 
			id="submit" 
			name="Submit" 
			className={styles.form_btn}
			attr={{type: "submit"}}
		/>
	</form>
  )
}

export default LoginForm
