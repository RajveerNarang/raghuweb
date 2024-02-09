import React from 'react'

import styles from '@components/Basics/File/file.module.scss'
const File = ({path, name}) => {
  return (
	<div className={styles.container}>
		<a href={path} download> {name} </a>
	</div>
  )
}

export default File