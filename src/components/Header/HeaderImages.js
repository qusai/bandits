import React, { Component } from 'react'
import styles from './header-image.module.scss'
import header1 from './header-1.jpg'
import header2 from './header-2.jpg'

export default class HeaderImages extends Component {
  render() {
    const { doc } = this.props

    if (doc) {
      const header_images = doc.header_images.map((image, index) => {
        return (
          <div className={styles.header_image} key={index}>
            <picture>
              <source
                media="(max-width: 400px)"
                srcSet={image.header_image.md.url}
              />
              <source
                media="(max-width: 768px)"
                srcSet={image.header_image.lg.url}
              />
              <source
                media="(max-width: 2560px)"
                srcSet={image.header_image.xl.url}
              />
              <source srcSet={image.header_image.url} />
              <img src={image.header_image.url} alt="" />
            </picture>
          </div>
        )
      })
      return <div className={styles.header_images}>{header_images}</div>
    } else {
      return null
    }
  }
}
