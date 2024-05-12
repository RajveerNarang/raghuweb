import React from 'react'
import PropTypes from 'prop-types'
import styles from '@components/Basics/GlassBox/glass.module.scss'

/**
 * Renders a GlassCard component with the given props.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - id: string (required) - The id of the GlassCard element.
 *   - children: ReactNode (required) - The content to be rendered inside the GlassCard.
 *   - className: string (optional) - Additional CSS class names for the GlassCard element.
 *   - handleClick: function (optional) - The click event handler for the GlassCard element.
 * @return {JSX.Element} The rendered GlassCard component.
 */
const GlassCard = (props) => {
	const { id, children, className, handleClick } = props;
	return (
		<section id={id} className={`${styles.container} ${className || ''}`} onClick={handleClick}>
			{children}
		</section>
	)
}

GlassCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GlassCard
