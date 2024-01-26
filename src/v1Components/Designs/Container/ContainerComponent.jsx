import React from 'react'
import TyyAnimate from '@src/v1Components/Designs/Triple yin yang/TyyAnimate';
import TyyComponent from '@src/v1Components/Designs/Triple yin yang/TyyComponent';

import container from '@src/v1Components/Designs/Container/container.module.css'

function ContainerComponent() {
	return (
		<div className={container.main}>
			<div className='container'>
				<TyyComponent />
			</div>
			<div className='container'>
				<TyyAnimate />
			</div>
		</div>
	)
}

export default ContainerComponent;
