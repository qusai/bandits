import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
	<header className={styles.header}>
		<h1 className={styles.site_name}>
			<Link className={styles.site_name_link} to="/">
				Bandits
			</Link>
		</h1>
	</header>
)

export default Header
