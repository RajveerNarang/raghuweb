import React from 'react'
import Block from '@src/v1Components/Projects/Block'
import CssDesigns from '@src/v1Components/Projects/CssDesigns'
import CssShapes from '@src/v1Components/Projects/CssShapes'

import projects from '@src/v1Components/Projects/projects.module.css'

function Projects() {
	return (
		<div className={projects.background}>
			<div className={projects.laptop_screen}>
				<div className={projects.block}>
					<Block />
				</div>
				<div className={projects.block}>
					<CssShapes />
				</div>
				<div className={projects.block}>
					<CssDesigns />
				</div>
			</div>
		</div>
	)
}

export default Projects
