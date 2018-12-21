import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  const date = new Date()

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footer_contact_info}>
        <h3 className={styles.footer_title}>Follow Us</h3>
        <div className={styles.footer_social}>
          <div className={styles.footer_contact}>
            <a
              href="https://www.instagram.com/bandits.photography/"
              target="_blank"
              title="Follow Bandits Photography on Instagram"
              className={styles.footer_contact_link}
            >
              Instagram
            </a>
          </div>

          <div className={styles.footer_ornament} />

          <div className={styles.footer_contact}>
            <a
              href="https://twitter.com/BanditsWedding"
              target="_blank"
              title="Follow Bandits Photography on Twitter"
              className={styles.footer_contact_link}
            >
              Twitter
            </a>
          </div>
        </div>

        <div className={styles.footer_contact}>
          <a
            className={styles.footer_contact_email}
            href="mailto:hello@bandits.photography"
            title="Send us an email"
          >
            Let's Talk Today
          </a>
        </div>
      </div>
      <p className={styles.copyrights}>
        ©{date.getFullYear()}. <a href="/">Bandits.</a>
      </p>
    </footer>
  )
}

export default Footer
