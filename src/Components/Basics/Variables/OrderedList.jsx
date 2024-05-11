import React from 'react'
import PropTypes from 'prop-types'

const OrderedList = (props) => {

	const {lists, className, openModal} = props
	if (!lists || lists === undefined) {
		return null
	}
	const renderItems = (lists) => (lists.map((list, index) => (
		<li key={index} onClick={() => openModal(index)}>
			{list.text || list}
		</li>
	)))
	
  return (
	<ol style={{
		margin: '1rem 0',
		cursor: 'pointer'
	}} className={className || ''}>
		{renderItems(lists)}
	</ol>
  )
}

OrderedList.propTypes = {
	lists: PropTypes.array.isRequired
}

export default OrderedList
