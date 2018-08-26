import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../prismic'
import HeaderImages from './HeaderImages'
import styles from './header.module.scss'

class Header extends Component {
  state = {
    doc: null,
    scrollTop: null,
    windowWidth: null,
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
    const { headerLoaded } = this.props

    headerLoaded()

    this.setState({
      windowWidth: window.innerWidth,
    })

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  handleScroll = () => {
    let scrollTop = window.scrollY
    this.setState({ scrollTop: scrollTop })
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    const { scrollTop, doc, windowWidth, imagesLoaded } = this.state

    const breakPoint = 768
    const maxPosition = 50
    const scroll = scrollTop * 0.1 // Adjust speed
    const position = scroll > maxPosition ? maxPosition : scroll
    const opacity = Math.round((position - maxPosition / 2) * 100) / 100
    const elementPosition = maxPosition - position
    const fontSize =
      (windowWidth >= breakPoint ? elementPosition : elementPosition * 0.15) +
      20 // Set minimum font-size: 20

    // Styles to animate the position of the site name
    const nameStyle = {
      transform: 'translateY(-' + elementPosition + '%)',
      top: elementPosition + '%',
      backgroundColor: 'rgba(70, 96, 96, ' + (opacity / 100) * 4 + ')',
    }

    // Styles to animate the font-size
    const linkStyle = {
      fontSize: fontSize / (windowWidth >= breakPoint ? 13 : 6) + 'em',
    }

    // Styles to animate tagline
    const taglineStyle = {
      opacity: (position * 2) / 100,
    }

    const headerStyles = {
      opacity: (opacity / 100) * 4,
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
    return null
  }
}

export default Header
