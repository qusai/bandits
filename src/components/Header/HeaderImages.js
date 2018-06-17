import React, { Component } from 'react'
import styles from './header-image.module.scss'
import ResponsiveImage from '../ResponsiveImage'

export default class HeaderImages extends Component {
  render() {
    const { doc } = this.props

    if (doc) {
      const header_images = doc.header_images.map((image, index) => {
        return (
          <div className={styles.header_image} key={index}>
            <ResponsiveImage image={image.header_image} />
          </div>
        )
      })
      return <div className={styles.header_images}>{header_images}</div>
    } else {
      return null
    }
  }
}
