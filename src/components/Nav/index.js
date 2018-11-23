import React from 'react'
import styles from './nav.module.scss'

const Nav = ({ navToggle, isToggleOn }) => {
  const handleClick = () => {
    navToggle()
  }

  const closeNav = () => {
    navToggle('close')
  }

  return (
    <div className={styles.nav}>
      <nav
        className={isToggleOn ? styles.nav_content_on : styles.nav_content_off}
      >
        <a
          className={styles.nav_item}
          data-index="1"
          href="#kristin-ian"
          onClick={handleClick}
        >
          Kristin & Ian
        </a>
        <a
          className={styles.nav_item}
          data-index="2"
          href="#stephanie-ryan"
          onClick={handleClick}
        >
          Stephanie & Ryan
        </a>
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
        {isToggleOn ? '✕' : '•••'}
      </button>
    </div>
  )
}

export default Nav
