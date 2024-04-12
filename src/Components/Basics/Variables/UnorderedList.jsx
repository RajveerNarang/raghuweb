import React from 'react'
import PropTypes from 'prop-types'

const UnorderedList = (props) => {

	const {lists, className} = props
	if (!lists || lists === undefined) {
		return null
	}

	const renderItems = (lists) => (lists.map((list, index) => (
		<li key={index}>
			{list.text}
		</li>
	)))
	
  return (
	<ul className={className || ''}>
		{renderItems(lists)}
	</ul>
  )
}

UnorderedList.propTypes = {
	lists: PropTypes.array.isRequired
}

export default UnorderedList
