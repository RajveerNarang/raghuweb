import React from 'react'
import styles from '@components/Basics/Image/images.module.scss';

const Image = ({path, alt, className}) => {
  return (
	<img src={path} alt={alt} className={`${styles.image} ${className || ''}`} />
  )
}

export default Image
