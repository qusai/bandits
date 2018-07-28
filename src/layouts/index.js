import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './global.scss'

const Layout = ({ children, data }) => <main>{children()}</main>

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
