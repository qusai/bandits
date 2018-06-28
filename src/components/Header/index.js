import React, { Component } from 'react'
import Link from 'gatsby-link'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../prismic'
import HeaderImages from './HeaderImages'
import styles from './header.module.scss'

class Header extends Component {
  state = {
    doc: null,
    scrollTop: null,
  }

  componentWillMount() {
    // Get data from Prismic
    Prismic.api(apiEndpoint, { accessToken }).then(api => {
      api
        .query(Prismic.Predicates.at('document.type', 'header'))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results['0'] })
          }
        })
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    let scrollTop = window.scrollY
    this.setState({ scrollTop: scrollTop })
  }

  render() {
    const { scrollTop, doc } = this.state
    const maxPosition = 50
    const scroll = scrollTop * 0.1 // adjust speed
    const position = scroll > maxPosition ? maxPosition : scroll
    const elementPosition = maxPosition - position
    const fontSize = elementPosition + 20 // set minimum font-size

    // Styles to animate the position
    const nameStyle = {
      transform: 'translateY(-' + elementPosition + '%)',
      top: elementPosition + '%',
    }

    // Styles to animate the font-size
    const linkStyle = {
      fontSize: fontSize / 3 + 'vw',
    }

    // Styles to animate tagline
    const taglineStyle = {
      opacity: position * 2 / 100,
    }

    if (doc) {
      return (
        <header className={styles.header}>
          <h1 className={styles.site_name} style={nameStyle}>
            <Link className={styles.site_name_link} style={linkStyle} to="/">
              Bandits
            </Link>
            <span className={styles.site_tagline} style={taglineStyle}>
              Wedding Photography
            </span>
          </h1>
          <HeaderImages doc={doc} />
        </header>
      )
    }
    return <h1>Loading...</h1>
  }
}

export default Header
