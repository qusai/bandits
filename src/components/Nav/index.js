import React, { Component } from 'react'
import styles from './nav.module.scss'

class Nav extends Component {
  state = {
    isToggleOn: false,
  }

  handleClick = () => {
    const { navToggle } = this.props

    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))

    navToggle()
  }

  render() {
    const { isToggleOn } = this.state

    return (
      <div className={styles.nav}>
        <nav
          className={
            isToggleOn ? styles.nav_content_on : styles.nav_content_off
          }
        >
          <a
            className={styles.nav_item}
            href="#kristin-ian"
            onClick={this.handleClick}
          >
            Kristin & Ian
          </a>
          <a
            className={styles.nav_item}
            href="#stephanie-ryan"
            onClick={this.handleClick}
          >
            Stephanie & Ryan
          </a>
        </nav>
        <a className={styles.contact_link} href="#contact">
          Contact
        </a>
        <button
          aria-label="Menu"
          className={styles.nav_button}
          onClick={this.handleClick}
        >
          •••
        </button>
      </div>
    )
  }
}

export default Nav
