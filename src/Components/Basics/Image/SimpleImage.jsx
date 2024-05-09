import React from 'react'

const SimpleImage = ({path, alt, className}) => {
	return (
	  <img src={path} alt={alt} className={`${className || ''}`} />
	)
  }

export default SimpleImage
