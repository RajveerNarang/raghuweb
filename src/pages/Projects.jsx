import React, { Fragment, useState } from 'react'
import styles from '@components/ProjectsComponent/projects.module.scss'

import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import Project1 from '@components/ProjectsComponent/Project1'
import Project2 from '@components/ProjectsComponent/Project2'
import Project3 from '@components/ProjectsComponent/Project3'

const projectData = [
	{
		projectId: 'project1',
		heading: 'Project 1',
	},
	{
		projectId: 'project2',
		heading: 'Project 2',
	},
	{
		projectId: 'project3',
		heading: 'Project 3',

	}
]

/**
 * Renders a component that displays a list of projects and their details in a modal.
 *
 * @return {JSX.Element} The rendered component.
 */
const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(null)
	const [selectedProject, setSelectedProject] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	/**
	 * Renders a modal component based on the selected project.
	 *
	 * @param {number} index - The index of the project.
	 * @return {JSX.Element} The rendered modal component.
	 */
	const getModal = (index) => {
		switch (selectedProject) {
			case 'project1':
				return (
					<Project1 
						isCurrentOpen={index === currentIndex && isOpen} 
						handleClose={handleClose}
						heading = {projectData[currentIndex].heading}
					/>
				)
			case 'project2':
				return (
					<Project2
						isCurrentOpen={index === currentIndex && isOpen} 
						handleClose={handleClose}
						heading = {projectData[currentIndex].heading}
					/>
				)
			
			case 'project3':
				return (
					<Project3
						isCurrentOpen={index === currentIndex && isOpen} 
						handleClose={handleClose}
						heading = {projectData[currentIndex].heading}
					/>
				)
		
			default:
				return null;
		}
	}

	/**
	 * Handles the opening of a modal by setting the state variables isOpen, currentIndex, and selectedProject.
	 *
	 * @param {number} index - The index of the project.
	 * @param {string} projectId - The ID of the project.
	 * @return {void} This function does not return anything.
	 */	
	const handleOpen = (index, projectId) => {
		setIsOpen(true)
		setCurrentIndex(index)
		setSelectedProject(projectId)
	}
	
	/**
	 * Closes the component by setting the `isOpen` state to `false`.
	 *
	 * @return {void} No return value.
	 */
	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<div className={`${styles.container}`}>
			{projectData.map((item, index) => (
				<Fragment key={index}>
					<GlassCard 
						id={`project${index}`} 
						className={styles.animate} 
						handleClick={() => handleOpen(index, item.projectId)}

					>
						<Header level={3} text={item.heading} />
					</GlassCard>
					{getModal(index)}
				</Fragment>
			))}
		</div>
	)
}

export default Projects
