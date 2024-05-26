import React from 'react'

import Project1 from '@components/ProjectsComponent/Project1'
import Project2 from '@components/ProjectsComponent/Project2'
import Project3 from '@components/ProjectsComponent/Project3'
import Project4 from '@components/ProjectsComponent/Project4'
const ProjectsMapping = (props) => {
	const {isCurrentOpen, projectData, selectedProject, handleClose} = props

	switch (selectedProject) {
		case 'japanClient':
			return (
				<Project1 
					isCurrentOpen={isCurrentOpen} 
					handleClose={handleClose}
					heading = {projectData[0].heading}
				/>
			)
		case 'howdy':
			return (
				<Project2
					isCurrentOpen={isCurrentOpen} 
					handleClose={handleClose}
					heading = {projectData[1].heading}
				/>
			)
		
		case 'aioList':
			return (
				<Project3
					isCurrentOpen={isCurrentOpen} 
					handleClose={handleClose}
					heading = {projectData[2].heading}
				/>
			)
		
		case 'spaceShoot':
			return (
				<Project4
					isCurrentOpen={isCurrentOpen} 
					handleClose={handleClose}
					heading = {projectData[3].heading}
				/>
			)
		default:
			return null;
	}
}

export default ProjectsMapping
