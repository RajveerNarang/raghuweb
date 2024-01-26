import { Fragment } from 'react'
import { Link } from 'react-router-dom';

import projects from '@src/v1Components/Projects/projects.module.css'

function CssDesigns() {
	return (
		<Fragment>
			<div className={projects.custom_img_container}>
				<img 
					src={'/customLogo.png'} 
					alt='Custom' 
					width='400' 
					height='300'
				/>
			</div>
			<div className={projects.content}>
				<Link to='/designs'>CSS Design</Link>
				<div className={projects.text}>
					In it every new designs and which are not available in above link will be here and will have update whenever I get free time. You can check designs by clicking the title above.
				</div>
			</div>
		</Fragment>
	)
}

export default CssDesigns;
