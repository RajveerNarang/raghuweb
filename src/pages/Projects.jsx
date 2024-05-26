import React, { Fragment, useState } from 'react'
import styles from '@components/ProjectsComponent/projects.module.scss'

import GlassCard from '@components/Basics/GlassBox/GlassCard'
import Header from '@components/Basics/Variables/Header'
import ProjectsMapping from '../components/ProjectsComponent/ProjectsMapping'

const projectData = [
	{
		projectId: 'japanClient',
		heading: 'Japan Client',
	},
	{
		projectId: 'howdy',
		heading: 'Howdy Chat App',
	},
	{
		projectId: 'aioList',
		heading: 'AIO Lists',
	},
	{
		projectId: 'spaceShoot',
		heading: 'Space Shooting',
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
					<ProjectsMapping
						isCurrentOpen={index === currentIndex && isOpen}
						projectData={projectData}
						selectedProject={selectedProject}
						handleClose={handleClose}
					/>
				</Fragment>
			))}
		</div>
	)
}

export default Projects
