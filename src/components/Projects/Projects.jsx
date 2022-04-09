import React from 'react'
import Block from './Block'
import CssShapes from './CssShapes'

import projects from './projects.module.css'

function Projects() {
	return (
		<div className={projects.background}>
			<Block />
			<CssShapes />
		</div>
	)
}

export default Projects
