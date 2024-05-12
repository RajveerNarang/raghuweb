import React from 'react'
import styles from '@components/Basics/Image/images.module.scss';

/**
 * Renders an image component with the specified path, alt text, and optional class name.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.path - The path to the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} [props.className] - The optional class name for the image.
 * @return {JSX.Element} The rendered image component.
 */
const Image = ({path, alt, className}) => {
  return (
	<img src={path} alt={alt} className={`${styles.image} ${className || ''}`} />
  )
}

export default Image
