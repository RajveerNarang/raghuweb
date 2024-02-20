import React from 'react'
import styles from '@components/Basics/Image/images.module.scss';

const Image = ({path, alt, additonalClass}) => {
  return (
	<img src={path} alt={alt} className={`${styles.image} ${additonalClass || ''}`} />
  )
}

export default Image