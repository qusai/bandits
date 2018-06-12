import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </div>
)

export default Header
