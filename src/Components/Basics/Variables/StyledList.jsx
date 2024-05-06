import React from 'react'
import PropTypes from 'prop-types'

const StyledList = (props) => {

	const {lists, className} = props
	if (!lists || lists === undefined) {
		return null
	}

	const renderItems = (lists) => (lists.map((list, index) => {
		if(list.bold && list.italic) {
			return <li key={index}>
						{<strong>{list.bold}:</strong>} {<em>{list.italic}</em>}
					</li>
		} else if(list.italic) {
			return <li key={index}>
						{<em>{list.text}:</em>} {list.italic }
					</li>
		} else {
			return <li key={index}>
						{<strong>{list.bold}:</strong>} {list.text}
					</li>
		}
	}))
	
  return (
	<ul className={className || ''}>
		{renderItems(lists)}
	</ul>
  )
}

StyledList.propTypes = {
	lists: PropTypes.array.isRequired
}

export default StyledList
