import React from 'react'
import PropTypes from 'prop-types'

import styles from '@components/Basics/Dropdown/dropdown.module.scss'

const Dropdown = ({data, additionalClass}) => {
	if (!data || data === undefined) {
		return null
	}

	const renderItems = (data) => {
		return data.map((item, index) => (
			<div key={index} className={`${styles.dropdownContainer}`}>
				<div className={`${styles.dropdownBtn}`}> {item.title}</div>
				<div className={`${styles.dropdownContent}`}>
					{item.content}
				</div>
			</div>
		))
	}

  return (
	<>
		{renderItems(data)}
	</>
  )
}

Dropdown.prototype = {
  data: PropTypes.array.isRequired
}

export default Dropdown