import React from 'react'
import PropTypes from 'prop-types'

const OrderedList = (props) => {

	const {lists, additionalClass} = props
	if (!lists || lists === undefined) {
		return null
	}
	const renderItems = (lists) => (lists.map((list, index) => (
		<li key={index}>
			{list.text}
		</li>
	)))
	
  return (
	<ol className={additionalClass}>
		{renderItems(lists)}
	</ol>
  )
}

OrderedList.propTypes = {
	lists: PropTypes.array.isRequired
}

export default OrderedList