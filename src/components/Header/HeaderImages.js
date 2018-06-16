import React, { Component } from 'react'
import styles from './header-image.module.scss'
import header1 from './header-1.jpg'
import header2 from './header-2.jpg'

export default class HeaderImages extends Component {
	render() {
		return (
			<div className={styles.header_images}>
				<div className={styles.header_image}>
					<img src={header1} alt="" />
				</div>

				<div className={styles.header_image}>
					<img src={header2} alt="" />
				</div>
			</div>
		)
	}
}
