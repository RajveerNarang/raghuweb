import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@components/ContactComponent/contact.module.scss'

/**
 * Renders a container component with optional content and icon.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.content - The content to be displayed in the container.
 * @param {string} props.iconName - The name of the icon to be displayed in the container.
 * @param {string} props.id - The id of the container element.
 * @return {JSX.Element} The rendered container component.
 */
const Container = (props) => {
	const {content, iconName, id} = props
  return (
	<div id={id} className={styles.group}>
		{iconName ? <FontAwesomeIcon icon={iconName} className={`${styles.icon}`} /> : null}
		<span>{content}</span>
	</div>
  )
}

Container.prototype = {
	id: PropTypes.string,
	content: PropTypes.string,
	iconName: PropTypes.string
}

export default Container
