import React from 'react'
import TyyAnimate from '../Triple yin yang/TyyAnimate';
import TyyComponent from '../Triple yin yang/TyyComponent';

import container from './container.module.css'

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
