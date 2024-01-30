import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {

	const {lists, type, additionalClass} = props
	if (!lists || lists === undefined || type !== 'u' && type !== 'o') {
		return null
	}

	const Tag = `${type}l`
	// console.log(type, Tag);

	const renderItems = (lists) => (lists.map((list, index) => (
		<li key={index}>
			{list.text}
		</li>
	)))
	
  return (
	<Tag className={additionalClass}>
		{renderItems(lists)}
	</Tag>
  )
}

List.propTypes = {
	lists: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired
}

export default List