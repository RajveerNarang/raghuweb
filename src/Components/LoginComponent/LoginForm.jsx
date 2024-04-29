import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/LoginComponent/login.module.scss'
import { setAccessData } from '@utils/auth'

const LoginForm = () => {
	const navigate = useNavigate()
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
			setAccessData(response)

			setFormData({
				email: '',
				username: ''
			})
			setError('')
			navigate('/')
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
