import React from 'react'

import StyledList from '@components/Basics/Variables/StyledList'
import Header from '@components/Basics/Variables/Header'
import educationAbout from '@json/frontend/educationAbout'

import styles from '@components/AboutComponent/about.module.scss'

const Education = () => {

	const graduation = [
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
	
  return (
	<>
		<Header className={`${styles.text_center}`} text="Bachelor of Engineering in Computer Science and Engineering" level={4} />
		<StyledList className={`${styles.text_center} ${styles.scale_list}`} lists={graduation} />

		<Header className={`${styles.text_center}`} text="Srijan - A Material+ Company" level={4} />
		<div className='grid'>
			{educationAbout.map((item, index) => (
				<div key={index}>
					<Header text={item.heading} level={5} />
					<StyledList className={` ${styles.scale_list}`} lists={item.lists} />
				</div>
			))}
		</div>
	</>
  )
}

export default Education
