import React from 'react'

/**
 * Renders a simple image component with the specified path, alt text, and optional class name.
 *
 * @param {string} path - The path to the image.
 * @param {string} alt - The alt text for the image.
 * @param {string} className - The optional class name for styling.
 * @return {JSX.Element} The rendered image component.
 */
const SimpleImage = ({path, alt, className}) => {
	return (
	  <img src={path} alt={alt} className={`${className || ''}`} />
	)
  }

export default SimpleImage
