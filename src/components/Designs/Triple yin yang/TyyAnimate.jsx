import { Fragment } from 'react'
import animate from './animate.module.css'

function TyyAnimate() {
  return (
	<Fragment>
		<div className={animate.animation}>
			<div className={animate.center}></div>
			<div className={animate.border_curve}>
				<div className={animate.circle}></div>
			</div>
			<div className={animate.border_curve_0}>
				<div className={animate.circle_0}></div>
			</div>
			<div className={animate.border_curve_1}>
				<div className={animate.circle_1}></div>
			</div>
		</div>
	</Fragment>
  )
}

export default TyyAnimate