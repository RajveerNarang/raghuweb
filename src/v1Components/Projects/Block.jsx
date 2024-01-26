import { Fragment } from 'react'

import projects from '@src/v1Components/Projects/projects.module.css'

function Block() {
	return (
		<Fragment>
			<div className={projects.img_container}>
				<img 
					src={'/github.png'} 
					alt='Github' 
					width='400' 
					height='300'
				/>
			</div>
			<div className={projects.content}>
				<a
					href='https://github.com/Raghunandan1451/howdy' 
					target='_blank'
					rel='noreferrer' >
					Howdy Chat
				</a>
				<div className={projects.text}>
					The reason of it's creation is to represent it as group project in university. Though we just shown a dummy version at that time and redesigned in the form it is right now, yet it isn't uploaded because of incompletion.
				</div>
			</div>
		</Fragment>
	)
}

export default Block;
