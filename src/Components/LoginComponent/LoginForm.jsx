import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/LoginComponent/login.module.scss'
import { setAccessData } from '@utils/auth'

/**
 * Renders a login form component.
 *
 * @return {JSX.Element} The rendered login form component.
 */
const LoginForm = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		email: '',
		username: ''
	})
	const [error, setError] = useState('')
	
	/**
	 * Updates the form data based on the input change event.
	 *
	 * @param {Event} e - The input change event object.
	 * @return {void} This function does not return anything.
	 */
	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({
		  ...formData,
		  [name]: value
		})
	}
		
	/**
	 * Handles the form submission event.
	 *
	 * @param {Event} e - The form submission event object.
	 * @return {Promise} A Promise representing the outcome of the form submission.
	 */
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
			{error ? <span className={`error`}>{error}</span> : null}
			
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
