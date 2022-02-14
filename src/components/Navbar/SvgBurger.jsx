import React, { Fragment } from 'react'

function SvgBurger() {
  return (
	  <Fragment>
			<svg width={30} height={25} >
				<rect x={5} y={5} width={20} height={2} 
					fill='#dfdad7' stroke='#dfdad7' 
				/>
				<rect x={5} y={11} width={20} height={2} 
					fill='#dfdad7' stroke='#dfdad7'
				/>
				<rect x={5} y={17} width={20} height={2} 
					fill='#dfdad7' stroke='#dfdad7'
				/>
			</svg>
	  </Fragment>
  )
}

export default SvgBurger