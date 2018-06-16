import React, { Component } from 'react'
import Link from 'gatsby-link'
import Prismic from 'prismic-javascript'
import HeaderImages from './HeaderImages'
import styles from './header.module.scss'

class Header extends Component {
  render() {
    let { scrollTop } = this.props
    const { doc } = this.props

    const maxPosition = 50
    const scroll = scrollTop * 0.1 // adjust speed
    const position = scroll > maxPosition ? maxPosition : scroll
    const elementPosition = maxPosition - position
    const fontSize = elementPosition + 20 // set minimum font-size
    const lineHeight = position / 50

    // Styles to animate the position
    const nameStyle = {
      transform: 'translateY(-' + elementPosition + '%)',
      top: elementPosition + '%',
    }

    // Styles to animate the font-size
    const linkStyle = {
      fontSize: fontSize / 3 + 'vw',
      lineHeight: lineHeight,
    }

    return (
      <header className={styles.header}>
        <h1 className={styles.site_name} style={nameStyle}>
          <Link className={styles.site_name_link} style={linkStyle} to="/">
            Bandits
          </Link>
        </h1>
        <HeaderImages doc={doc} />
      </header>
    )
  }
}

export default Header
