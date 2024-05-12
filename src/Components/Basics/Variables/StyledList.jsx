import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a list of items with optional bold and italic styling.
 *
 * @param {Object} props - The props object containing the lists and className.
 * @param {Array} props.lists - An array of objects representing the list items.
 * @param {string} [props.className] - The optional class name for the ul element.
 * @return {JSX.Element|null} - The rendered ul element with list items, or null if lists is falsy.
 */
const StyledList = (props) => {

	const {lists, className} = props
	if (!lists || lists === undefined) {
		return null
	}

	/**
	 * Renders a list of items with optional bold and italic styling.
	 *
	 * @param {Array} lists - An array of objects representing the list items.
	 * @return {Array} An array of JSX elements representing the rendered list items.
	 */
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
