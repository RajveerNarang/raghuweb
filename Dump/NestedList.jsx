import React from 'react'
import PropTypes from 'prop-types'

const NestedList = ({data, type}) => {
	if (data.length === 0 || type !== 'u' && type !== 'o') {
		return null
	}

	const Tag = `${type}l`

	const renderListItems = (group) => {
		return group.map((item, index) => (
			<li key={index} style={{ listStyleType: item.listStyle }}>
				{item.text}
				{item.children && <NestedList data={item.children} />}
			</li>
		));
	};

	const renderLists = () => {
		return data.map((group, groupIndex) => (
		  <Tag key={groupIndex}>
			{renderListItems(group)}
		  </Tag>
		));
	  };
  return (
	<>
		{renderLists(data)}
	</>
  )
}

NestedList.propTypes = {
	data: PropTypes.array.isRequired,
	type: PropTypes.string.isRequired
}

export default NestedList