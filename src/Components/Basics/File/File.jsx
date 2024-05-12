import React from 'react'

import styles from '@components/Basics/File/file.module.scss'

/**
 * Renders a file component with a download link.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.path - The path to the file.
 * @param {string} props.name - The name of the file.
 * @param {string} props.className - The additional CSS class for the component.
 * @return {JSX.Element} The rendered file component.
 */
const File = (props) => {
	const {path, name, className} = props
	return (
		<div className={`${styles.container} ${className || ''}`}>
			<a href={path} download> {name} </a>
		</div>
	)
}

export default File
