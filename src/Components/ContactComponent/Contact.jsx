import React from 'react'

import { faDiscord, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Container from '@components/ContactComponent/Container'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import styles from '@components/ContactComponent/contact.module.scss'
import contactData from '@json/contact.json'

const Contact = () => {

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faEnvelope': return faEnvelope;
      case 'faDiscord': return faDiscord;
      case 'faInstagram': return faInstagram;
      case 'faLinkedin': return faLinkedin;
      case 'faWhatsapp': return faWhatsapp;
      case 'faXTwitter': return faXTwitter;
      default: return null;
    }
  }

  return (
	<div className={`${styles.container}`}>
    <GlassCard id={'contactGlassCard'} additionalClass={`${styles.container_child}`}>
      {contactData ? contactData.map((item, index) => (
        <div key={index} className={`${styles.items}`}>
          <Container id={item.id} content={item.data.content} iconName={getIcon(item.iconName)} />
        </div>
      )): null}
      
    </GlassCard>
  </div>
  )
}

export default Contact
