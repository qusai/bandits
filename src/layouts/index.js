import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../../static/images/favicon.png'
import ogImage from '../../static/images/og-bandits-image.jpg'

import './global.scss'

class Layout extends Component {
  componentDidMount() {
    window.onfocus = () => {
      document.title = 'Bandits Wedding Photography'
    }
    window.onblur = () => {
      document.title = 'COME BACK!'
    }
  }

  render() {
    const { children, data } = this.props

    return (
      <main>
        <Helmet>
          <title>Bandits Wedding Photography</title>
          <meta
            name="description"
            content="Bandits is an artist duo, wedding photographer couple based in Boston MA. We work with select couples to capture their love story."
          />
          <meta name="author" content="Qusai Akoud" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@BanditsWedding" />
          <meta name="twitter:creator" content="@qusaiakoud" />
          <meta property="og:url" content="https://bandits.photography" />
          <meta property="og:title" content="We Are Bandits" />
          <meta
            property="og:description"
            content="Bandits is an artist duo, wedding photographer couple based in Boston MA. We work with select couples to capture their love story."
          />
          <meta property="og:image" content={ogImage} />

          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        {children()}
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
