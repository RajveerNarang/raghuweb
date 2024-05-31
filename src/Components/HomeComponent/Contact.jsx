import React, { useState } from 'react'
import axios from 'axios'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/HomeComponent/home.module.scss'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import Textarea from '../Basics/Input/Textarea'

/**
 * Renders a Contact component that allows users to submit feedback or contact the platform.
 *
 * @param {Object} props - The properties passed to the Contact component.
 * @param {boolean} props.isCurrentOpen - A boolean indicating whether the Contact modal is currently open.
 * @param {function} props.handleClose - A function to handle closing the Contact modal.
 * @param {string} props.heading - The heading to display in the Contact modal.
 * @return {JSX.Element} The Contact component.
 */
const Contact = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
	const [formData, setFormData] = useState({
		username: '',
		message: ''
	})
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

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
			const response = await axios.post('/api/message', formData)

			setFormData({
				username: '',
				message: ''
			})
			setError('')
			setSuccess(response.message)
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
				{error ? <span className={`error`}>{error}</span> : null}
				{success ? <span className={`success`}>{success}</span> : null}
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
					inputNameId="message" 
					labelText="Message" 
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
