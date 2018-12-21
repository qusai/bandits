import React, { Component } from 'react'
import styles from './nav.module.scss'

class Nav extends Component {
  handleClick = () => {
    const { navToggle } = this.props
    navToggle()

    setTimeout(() => {
      this.refs.nav.focus()
    }, 200)
  }

  closeNav = () => {
    const { navToggle } = this.props
    navToggle('close')
  }

  render() {
    const { navToggle, isToggleOn, weddings } = this.props

    const wedding_link = weddings.map((wedding, index) => {
      const doc = wedding.data
      const weddingName = doc.wedding_name[0].text

      return wedding.data.wedding_photos.length ? (
        <a
          className={styles.nav_item}
          href={'#' + wedding.uid}
          key={index}
          onClick={this.handleClick}
        >
          {weddingName}
        </a>
      ) : null
    })

    return (
      <div className={styles.nav}>
        <nav
          className={
            isToggleOn ? styles.nav_content_on : styles.nav_content_off
          }
          ref="nav"
          tabIndex="0"
        >
          {wedding_link}
        </nav>
        <a
          className={styles.contact_link}
          href="#contact"
          onClick={this.closeNav}
        >
          Contact
        </a>
        <button
          aria-label="Menu"
          className={isToggleOn ? styles.nav_button_close : styles.nav_button}
          onClick={this.handleClick}
          title="Weddings List"
        >
          <span className={styles.btn_icon} />
        </button>
      </div>
    )
  }
}

export default Nav
