import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Header from '@components/Basics/Variables/Header'
import Paragraph from '@components/Basics/Variables/Paragraph'
import UnorderedList from '@components/Basics/Variables/UnorderedList'
import styles from '@components/HomeComponent/home.module.scss'
import GlassCard from '@components/Basics/GlassBox/GlassCard'

const HomeContent = () => {

	const isDesktop = useMediaQuery({minWidth: 767})

	const lists = [
		{ text: 'Node.js'},
		{ text: 'Express.js'},
		{ text: 'React.js'},
		{ text: 'Vertical Timeline Component'},
		{ text: 'Framer Motion'},
		{ text: 'Chart.js'},
	]
  return (
	<GlassCard id={'homeGlassCard'} className={`${styles.box}`}>
		<Header text={"Greetings Visitor!"} level={2} />
		<Paragraph content="This platform is designed to share insights and experiences from my journey. It's a place where I express myself and showcase my work. From technical tutorials to personal reflections, you'll find a variety of topics covered here."/>

		{isDesktop ? 
		<>
			<Header text={'Technology Utilized'} level={3} />
			<Paragraph content="I applied various methodologies and techniques, such as adopting a mobile-first approach, emphasizing component reusability, and leveraging absolute paths. Additionally, I integrated cutting-edge technologies to enhance the functionality and performance of the platform." />
			<UnorderedList className={styles.list_group} lists={lists}/>
		</> : null}

		<Header text="Notice:" level={4} />
		<Paragraph content="Please note that the login feature is currently under development and won't enhance your experience at this time. However, stay tuned as I plan to add new features in the near future!" />
		<Header text="Contact:" level={4} />
		<Paragraph className={styles.spacing} content="For inquiries, feedback, or just to say hello, feel free to reach out! Your messages are greatly appreciated and will help shape the future of this platform." />
	</GlassCard>
  )
}

export default HomeContent
