import React from 'react'
import Paragraph from '@components/Basics/Variables/Paragraph'
import StyledList from '@components/Basics/Variables/StyledList'

import styles from '@components/AboutComponent/about.module.scss'

const rInt = [
	{
		bold: "Swimming",
		text: "I learned just the basic elements of swimming because I saw it as a valuable skill to have."
	}, {
		bold: "Piano (Keyboard)",
		text: "I feel that my proficiency in piano is limited to the basics because I was introduced to it during my childhood but had to abandon it due to certain situations. Subsequently, I pursued relearning the piano for personal fulfillment or as a potential leisure activity."
	}
]

/**
 * Renders the Interests component with paragraphs detailing the user's diverse interests including watching anime, playing games, cooking/baking, and random tasks. Also includes a StyledList component.
 *
 * @return {JSX.Element} The rendered Interests component
 */
const Interests = () => (
	<>
		<Paragraph className={`spacing`} content="In this section, I'm excited to share my diverse range of interests and passions. From my highest to lowest pursuits, I'm showcasing my explorations and expressions in various creative outlets" />
		<Paragraph bold="Watching Anime: " content="As an anime fan, I enjoy a wide range of genres, but Yaoi and Yuri aren't my thing. On the other hand, I'm hooked on Shounen and Seinen shows, which often feature epic stories and complex characters. With a 45% chance of watching anime on any given day, you might just catch me bingeing my favorite shows!" />
		<Paragraph className={`spacing`} bold="Playing Games: " content="I'm not a gamer by definition, but I do enjoy playing games from the Action, RPG, and Strategy genres. Additionally, You can expect me to play games about 30% of the time." />
		<Paragraph bold="Cooking/Baking: " content="I developed my interest in baking and cooking around the beginning of 2023, and while I'm still exploring the boundaries between the two, I can confidently say that my journey began with a passion for baking. Chances of seeing me cooking is 15% on weekends" />
		<Paragraph className={`spacing`} bold="Random: " content="Anything can be included in this based on mood and there is a 10% chance of actually doing it. Tasks I have completed so far include:" />
		<StyledList className={`${styles.scale}`} lists={rInt}  />
	</>
)

export default Interests
