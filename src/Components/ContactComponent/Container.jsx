import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '@components/ContactComponent/contact.module.scss'

const Container = (props) => {
	const {name, iconName, id} = props
  return (
	<div id={id} className={styles.group}>
		{iconName ? <FontAwesomeIcon icon={iconName} /> : null}
		<span>{name}</span>
	</div>
  )
}

Container.prototype = {
	id: PropTypes.string,
	name: PropTypes.string,
	iconName: PropTypes.string
}

export default Container