import React from 'react'
import Block from './Block'
import CssDesigns from './CssDesigns'
import CssShapes from './CssShapes'

import projects from './projects.module.css'

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
