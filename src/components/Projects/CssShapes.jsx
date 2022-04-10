import {Fragment} from 'react'

import projects from './projects.module.css'

function CssShapes() {
	return (
		<Fragment>
			<div className={projects.img_container}>
				<img 
					src={'./github.png'} 
					alt='Github' 
					width='400' 
					height='300'
				/>
			</div>
			<div className={projects.content}>
				<div className={projects.link}>
					<a
						href='https://github.com/Raghunandan1451/CSS_ART' 
						target='_blank'
						rel='noreferrer' >
						CSS Draw
					</a>
				</div>
				<div className={projects.text}>
					Just to practice more of css and it's animation, I created some of drawing of animals using border at basic level.
				</div>
			</div>
		</Fragment>
	)
}

export default CssShapes;
