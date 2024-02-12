import React from 'react'

import styles from '@components/Basics/File/file.module.scss'
const File = (props) => {
	const {path, name, additionalClass} = props
  return (
	<div className={`${styles.container} ${additionalClass}`}>
		<a href={path} download> {name} </a>
	</div>
  )
}

export default File