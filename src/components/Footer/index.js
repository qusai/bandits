import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  const date = new Date()

  return (
    <footer id="contact" className={styles.footer}>
      <ul className={styles.footer_contact_info}>
        <li>
          <a href="mailto:hello@bandits.photography" title="Send us an email">
            Email
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bandits.photography/"
            target="_blank"
            title="Follow Bandits Photography on Instagram"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/BanditsWedding"
            target="_blank"
            title="Follow Bandits Photography on Twitter"
          >
            Twitter
          </a>
        </li>
      </ul>
      <p className={styles.copyrights}>
        ©{date.getFullYear()}. Bandits Wedding Photography.
      </p>
    </footer>
  )
}

export default Footer
