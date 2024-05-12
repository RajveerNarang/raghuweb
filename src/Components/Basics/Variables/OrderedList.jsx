import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders an ordered list of items as list items (<li>) with an onClick event that calls the openModal function with the index of the item.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.lists - An array of items to be rendered as list items. Each item can be an object with a 'text' property or a string.
 * @param {string} [props.className] - The optional CSS class name for the ordered list.
 * @param {Function} props.openModal - The function to be called when an item is clicked, passing the index of the clicked item.
 * @return {JSX.Element|null} The rendered ordered list as a JSX element, or null if the lists array is falsy.
 */
const OrderedList = (props) => {

	const {lists, className, openModal} = props
	if (!lists || lists === undefined) {
		return null
	}
	
	/**
	 * Renders a list of items as list items (<li>) with an onClick event that calls the openModal function with the index of the item.
	 *
	 * @param {Array} lists - An array of items to be rendered as list items. Each item can be an object with a 'text' property or a string.
	 * @return {Array} An array of JSX elements representing the list items.
	 */
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
