import React from 'react'

import StyledList from '@components/Basics/Variables/StyledList'
import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'

import educationAbout from '@json/frontend/educationAbout'
import styles from '@components/AboutComponent/about.module.scss'

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

/**
 * Renders the Education component with educational background and professional experience details.
 *
 * @return {JSX.Element} The JSX element representing the Education component.
 */
const Education = () => (
	<>
		<Paragraph className={`${styles.spacing} ${styles.text_center}`} content="Allow me to provide a concise overview of my educational background and professional experience, where I have assumed various roles across different domains." />
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

export default Education
