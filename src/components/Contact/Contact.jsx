import React from 'react'
import {SiGmail, SiWhatsapp, SiDiscord} from 'react-icons/si'
import {FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'

import contact from './contact.module.css'

function Contact() {
	return (
		<div className={contact.contact_background}>
			<div className={contact.icon_container}>
				<a href="mailto:raghunandansharma615@gmail.com">
					<div className={contact.gmail}>
						<SiGmail className={contact.gmailIcon} />
						raghunandansharma615@gmail.com
					</div>
				</a>
				<div className={contact.whatsapp}>
					<SiWhatsapp className={contact.whatsappIcon} />
					+91 9814101383
				</div>
				<a target='_blank' href='https://www.linkedin.com/in/raghunandan-sharma/'>		
					<div className={contact.linkedIn}>
						<FaLinkedin className={contact.linkedInIcon} />
						raghunandan sharma
					</div>
				</a>
				<div className={contact.discord}>
					<SiDiscord className={contact.discordIcon} />
					Senshi Ryo#6474
				</div>
				<a href="https://www.instagram.com/rick_lykos/" target="_blank">
					<div className={contact.instagram}>
						<FaInstagram className={contact.instagramIcon} />
						rick_lykos
					</div>
				</a>
			</div>
			<div className={contact.mobile_screen}>
				Website is not suitable for this width.
			</div>
		</div>
	)
}

export default Contact
