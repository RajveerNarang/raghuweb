import React from 'react'

import Modal from '@components/Basics/Modal/Modal'
import Paragraph from '@components/Basics/Variables/Paragraph'
import UnorderedList from '@components/Basics/Variables/UnorderedList'

import styles from '@components/HomeComponent/home.module.scss'

const lists = [
	{
		text: 'NodeJS'
	},
	{
		text: 'ExpressJS'
	},
	{
		text: 'ReactJS'
	},
	{
		text: 'Framer Motion'
	},
	{
		text: 'SASS / SCSS'
	},
	{
		text: 'HTML Canvas'
	},
	{
		text: 'Vertical React Timeline'
	},
	{
		text: 'Vite (instead of CRA)'
	}
]

/**
 * Renders a modal component displaying technologies used in the project.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isCurrentOpen - Indicates whether the modal is currently open.
 * @param {function} props.handleClose - The function to close the modal.
 * @param {string} props.heading - The heading of the modal.
 * @return {JSX.Element} The rendered modal component.
 */
const Technologies = (props) => {
	const { isCurrentOpen, handleClose, heading } = props
	return (
		<Modal
			isOpen={isCurrentOpen}
			onClose={handleClose}
			heading={heading}
		>
			<Paragraph content="I applied various methodologies and techniques, such as adopting a mobile-first approach, emphasizing component reusability, and leveraging absolute paths. Additionally, I integrated cutting-edge technologies to enhance the functionality and performance of the platform." />
			<UnorderedList className={styles.list_group} lists={lists}/>
		</Modal>
	)
}

export default Technologies
