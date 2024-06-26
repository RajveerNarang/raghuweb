import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

import styles from '@components/SkillsComponent/skill.module.scss'
import Header from '@components/Basics/Variables/Header';
import Paragraph from '@components/Basics/Variables/Paragraph';
import axios from 'axios';
import { sortDataByDate } from '@utils/timeline';


/**
 * Renders a timeline of the developer's journey using the VerticalTimeline component.
 *
 * @return {JSX.Element} The JSX element representing the timeline.
 */
const JourneyTree = () => {
	
	const [timelineList, setTimelineList] = useState([])

	useEffect(() => {
		const fetchData = (async () => {
			try {
				const resp = await axios.get('/api/journey')
				const sortedData = sortDataByDate(resp.data);
				setTimelineList(sortedData)
			} catch (error) {
				console.error(error, error.message)
			}
		})
		fetchData()
	}, [])

	return (
	<div className={`${styles.timelineContainer}`}>
		<VerticalTimeline lineColor='#ff5c00'>
			{
				timelineList.map((element, index) => (
					<VerticalTimelineElement
						key={index}
						date={element.date}
						dateClassName={`${styles.date}`}
						iconStyle={{ backgroundColor: "#ff5c00", color: "#121212", fontSize: "1.5rem" }}
						icon={<FontAwesomeIcon icon={faMicrochip} />}
						// contentStyle={{ border: "#ff5c00", color: "#fff", backgroundColor: "#121212" }}
					>
						<Header className={`vertical-timeline-element-title`} level={3} text={`${element.title}`} />
						<Paragraph content={element.description} />
					</VerticalTimelineElement>
				))
			}
		</VerticalTimeline>
	</div>
)}

export default JourneyTree
