import React from 'react'

import { faDiscord, faInstagram, faLinkedin, faWhatsapp, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Container from '@components/ContactComponent/Container'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import styles from '@components/ContactComponent/contact.module.scss'
import contactData from '@json/frontend/contact.json'
import Image from '@components/Basics/Image/Image'
import dummyProfile from '@images/dummyProfile.jpg'
import { useMediaQuery } from 'react-responsive'
import { getAccessData } from '@utils/auth'

const Contact = () => {

	const isDesktop = useMediaQuery({minWidth: 767})
	const data = getAccessData()

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faEnvelope': return faEnvelope;
      case 'faDiscord': return faDiscord;
      case 'faInstagram': return faInstagram;
      case 'faLinkedin': return faLinkedin;
      case 'faWhatsapp': return faWhatsapp;
      case 'faXTwitter': return faXTwitter;
      case 'faGithub': return faGithub;
      default: return null;
    }
  }

  const getClassName = (id) => {
    switch (id) {
      case 'gmail': return styles.gmail
      case 'linkedin': return styles.linkedin
      case 'github': return styles.github
      case 'whatsapp': return styles.whatsapp
      case 'instagram': return styles.instagram
      case 'discord': return styles.discord
      case 'xtwitter': return styles.xtwitter
      default: return null;
    }
  }

  const changeLink = (link1, link) => {
	  if (!isDesktop && link1) {
		  return link1;
	  } else {
		return link;
	  }
  }

  return (
	<div className={`${styles.container}`}>
    <GlassCard id={'contactGlassCard'} className={`${styles.box}`}>
      <Image path={dummyProfile} alt={'Dummy Profile'} />
      {contactData ? contactData.map((item, index) => {
		
        if (item.id !== 'instagram' && item.id !== 'discord') {
			return <a 
				href={changeLink(item.data.link1, item.data.link) || '#'} 
				key={index} 
				className={`${styles.items} ${getClassName(item.id)}`} 
				data-tooltip={item.data.tooltipData}
				target="_blank" 
				rel="noopener noreferrer"
				>
				<Container id={item.id} content={item.data.content} iconName={getIcon(item.iconName)} />
				</a> 
			} else {
			if (data?.isLoggedIn && data?.role === 'user') { 
				return <a 
				href={changeLink(item.data.link1, item.data.link) || '#'} 
				key={index} 
				className={`${styles.items} ${getClassName(item.id)}`} 
				data-tooltip={item.data.tooltipData}
				target="_blank" 
				rel="noopener noreferrer"
			>
				<Container id={item.id} content={item.data.content} iconName={getIcon(item.iconName)} />
			</a>
		}}
      }): null}
      
    </GlassCard>
  </div>
  )
}

export default Contact