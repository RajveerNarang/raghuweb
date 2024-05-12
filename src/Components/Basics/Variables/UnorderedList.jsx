import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders an unordered list based on the provided props.
 *
 * @param {Object} props - The props object containing lists and className.
 * @return {JSX.Element} The unordered list component.
 */
const UnorderedList = (props) => {

	const {lists, className} = props
	if (!lists || lists === undefined) {
		return null
	}

	/**
	 * Renders a list of items as unordered list items.
	 *
	 * @param {Array} lists - The array of items to render as list items.
	 * @return {Array} An array of JSX elements representing the list items.
	 */
	const renderItems = (lists) => (lists.map((list, index) => (
		<li key={index}>
			{list.text || list}
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
