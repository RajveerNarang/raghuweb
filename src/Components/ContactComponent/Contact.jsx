import React from 'react'

import Container from '@components/ContactComponent/Container'
import GlassCard from '@components/Basics/GlassBox/GlassCard'
import styles from '@components/ContactComponent/contact.module.scss'
import { faDiscord, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
	<div className={`${styles.container}`}>
    <GlassCard id={'contactGlassCard'} additionalClass={`${styles.container_child}`}>
      <div className={`${styles.items}`}>
        <Container id={'gmail'} name={'Gmail'} iconName={faEnvelope} />
      </div>
      <div className={`${styles.items}`}>
        <Container id={'whatsapp'} name={'Whatsapp'} iconName={faWhatsapp} />
      </div>
      <div className={`${styles.items}`}>
        <Container id={'linkedin'} name={'LinkedIn'} iconName={faLinkedin} />
      </div>
      <div className={`${styles.items}`}>
        <Container id={'instagram'} name={'Instagram'} iconName={faInstagram} />
      </div>
      <div className={`${styles.items}`}>
        <Container id={'discord'} name={'Discord'} iconName={faDiscord} />
      </div>
      <div className={`${styles.items}`}>
        <Container id={'twitter'} name={'Twitter/X'} iconName={faXTwitter} />
      </div>
    </GlassCard>
  </div>
  )
}

export default Contact