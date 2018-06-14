import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './global.scss'

const Layout = ({ children, data }) => <section>{children()}</section>

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
