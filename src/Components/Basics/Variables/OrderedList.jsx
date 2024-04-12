import React from 'react'
import PropTypes from 'prop-types'

const OrderedList = (props) => {

	const {lists, className} = props
	if (!lists || lists === undefined) {
		return null
	}
	const renderItems = (lists) => (lists.map((list, index) => (
		<li key={index}>
			{list.text || list}
		</li>
	)))
	
  return (
	<ol className={className || ''}>
		{renderItems(lists)}
	</ol>
  )
}

OrderedList.propTypes = {
	lists: PropTypes.array.isRequired
}

export default OrderedList
