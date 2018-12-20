import React from 'react'
import styles from './nav.module.scss'

const Nav = ({ navToggle, isToggleOn, weddings }) => {
  const handleClick = () => {
    navToggle()
  }

  const closeNav = () => {
    navToggle('close')
  }

  const wedding_link = weddings.map((wedding, index) => {
    const doc = wedding.data
    const weddingName = doc.wedding_name[0].text

    return wedding.data.wedding_photos.length ? (
      <a
        className={styles.nav_item}
        href={'#' + wedding.uid}
        key={index}
        onClick={handleClick}
      >
        {weddingName}
      </a>
    ) : null
  })

  return (
    <div className={styles.nav}>
      <nav
        className={isToggleOn ? styles.nav_content_on : styles.nav_content_off}
      >
        {wedding_link}
      </nav>
      <a className={styles.contact_link} href="#contact" onClick={closeNav}>
        Contact
      </a>
      <button
        aria-label="Menu"
        className={isToggleOn ? styles.nav_button_close : styles.nav_button}
        onClick={handleClick}
        title="Weddings List"
      >
        <span className={styles.btn_icon} />
      </button>
    </div>
  )
}

export default Nav
