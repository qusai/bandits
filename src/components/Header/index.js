import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
	<header className={styles.header}>
		<h1>
			<Link to="/">Bandits</Link>
		</h1>
	</header>
)

export default Header
