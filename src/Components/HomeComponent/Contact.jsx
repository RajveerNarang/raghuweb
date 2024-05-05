import React, { useState } from 'react'
import axios from 'axios'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/HomeComponent/home.module.scss'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import Textarea from '../Basics/Input/Textarea'

const Contact = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
	const [formData, setFormData] = useState({
		username: '',
		message: ''
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
			const response = await axios.post('/api/sendMessage', formData)

			setFormData({
				username: '',
				feedback: ''
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
	<Modal
		isOpen={isCurrentOpen}
		onClose={handleClose}
		heading={heading}
	>
		<form onSubmit={handleSubmit} className={`${styles.form}`}>		
		{error ? <span className={`${styles.error}`}>{error}</span> : null}
		<Paragraph content="If you have any questions, please feel free to contact me through the platform provided. For feedback, please use the form below. Your input is highly valued and will help shape the future development of this platform." />
		<Input 
			inputType="text" 
			inputNameId="username" 
			labelText="Username (optional)" 
			inputValue={formData.username}
			handleChange={handleInputChange}
		/>
		<Textarea 
			inputType="textarea" 
			inputNameId="feedback" 
			labelText="Feedback" 
			inputValue={formData.message}
			handleChange={handleInputChange}
		/>
		<ButtonReshaped 
			id="submit" 
			name="Submit" 
			className={styles.form_btn}
			attr={{type: "submit"}}
		/>
	</form>
	</Modal>
  )
}

export default Contact
