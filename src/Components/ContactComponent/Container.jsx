import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@components/ContactComponent/contact.module.scss'

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