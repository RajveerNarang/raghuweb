import React, { useState } from 'react'
import axios from 'axios'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/Basics/Form/form.module.scss'

const LoginForm = () => {

	const [formData, setFormData] = useState({
		email: '',
		username: ''
	})
	const [error, setError] = useState('')

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({
		  ...formData,
		  [name]: value
		})
	  }
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post('/api/login', formData)
			const token = response.data.token;

			// Set the token in a cookie with a 1-day expiry
			document.cookie = `token=${token}; expires=${new Date(Date.now() + 86400 * 1000).toUTCString()}; path=/`;
		

			setFormData({
				email: '',
				username: ''
			})
			setError('')
		} catch (error) {
			console.error('Login Failed', error.message)
			error.response.data.error ? 
				setError(error.response.data.error) :
				setError(error.message)
		}
	};


  return (
	<form onSubmit={handleSubmit} className={`${styles.form}`}>		
		{error ? <span className={`${styles.error}`}>{error}</span> : null}
		
		<Input 
			inputType="text" 
			inputNameId="username" 
			labelText="Username" 
			inputValue={formData.username}
			handleChange={handleInputChange}
		/>
		<Input 
			inputType="email" 
			inputNameId="email" 
			labelText="Email" 
			inputValue={formData.email}
			handleChange={handleInputChange}
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
