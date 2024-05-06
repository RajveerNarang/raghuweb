import React from 'react'

import StyledList from '@components/Basics/Variables/StyledList'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'

import styles from '@components/AboutComponent/about.module.scss'

const Education = () => {
	const lists = [
		{
			bold: 'Institution',
			text: 'Chitkara University'
		},
		{
			bold: 'Location',
			text: 'Rajpura, Punjab'
		},
		{
			bold: 'Duration',
			text: '2018 - 2022'
		}
	]
	const internship = [
		{
			bold: 'Role',
			text: 'Intern'
		},
		{
			bold: 'Location',
			text: 'Remote'
		},
		{
			bold: 'Duration',
			text: 'Jan, 2022 - Jul, 2022'
		}
	]
	const drupal = [
		{
			bold: 'Role',
			text: 'Drupal Full Stack Developer'
		},
		{
			bold: 'Location',
			text: 'Remote'
		},
		{
			bold: 'Duration',
			text: 'Aug, 2022 - Jan, 2023'
		}
	]
	
	const associate = [
		{
			bold: 'Role',
			text: 'Associate'
		},
		{
			bold: 'Location',
			text: 'Remote'
		},
		{
			bold: 'Duration',
			text: 'Feb, 2023 - Present'
		}
	]
  return (
	<>
		<Header text="Bachelor of Engineering in Computer Science and Engineering" level={4} />
		<StyledList className={styles.scale_list} lists={lists} />

		<Header text="Srijan - A Material+ Company" level={4} />
		<Header text="Internship" level={5} />
		<StyledList className={styles.scale_list} lists={internship} />

		<Header text="Developer" level={5} />
		<StyledList className={styles.scale_list} lists={drupal} />

		<Header text="Associate" level={5} />
		<StyledList className={styles.scale_list} lists={associate} />
	</>
  )
}

export default Education
