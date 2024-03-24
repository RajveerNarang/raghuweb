import React, { useEffect, useState } from 'react'

import Input from '@components/Basics/Input/Input'
import ButtonReshaped from '@components/Basics/Button/ButtonReshaped'

import styles from '@components/Basics/Form/form.module.scss'
import { keyMap } from '@utils/form'

const Form = () => {
	const [emailValue, setEmailValue] = useState('');


	const handleKeyDown = (event) => {
		if (['Shift', 'Alt', 'Backspace', 'Control'].includes(event.key)) {
			return;
		}

		const key = event.key.toLowerCase();
		const mappedNote = keyMap[key];

		if (mappedNote !== undefined) {
			const audioPath = `@audio/notes/${mappedNote}.mp3`;
			console.log(audioPath);
			const audio = new Audio(audioPath)
			// audio.src = audioUrl;
			audio.play()
		}
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		setEmailValue('')
	};

	const handleChange = (e) => {
		setEmailValue(e.target.value)
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [])

  return (
	<form onSubmit={handleSubmit} className={`${styles.form}`}>
		<Input 
			inputType="email" 
			inputNameId="email" 
			labelText="Email" 
			inputValue={emailValue}
			onChangeHandler={handleChange}
			// startAudioContext={startAudioContext}
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
