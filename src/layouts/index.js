import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './global.scss'

const Layout = ({ children, data }) => (
  <main>
    <Helmet>
      <title>Bandits Wedding Photography</title>
      <meta
        name="description"
        content="Bandits is an artist duo, wedding photographers based in Boston MA. We work with select couples to capture their love story."
      />
      <meta name="author" content="Qusai Akoud" />
    </Helmet>
    {children()}
  </main>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
