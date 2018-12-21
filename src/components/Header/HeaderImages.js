import React, { Component } from 'react'
import styles from './header-image.module.scss'
import ResponsiveImage from '../ResponsiveImage'

const HeaderImages = ({ doc }) => {
  if (doc) {
    const header_images = doc.data.header_images.map((image, index) => {
      return (
        <div className={styles.header_image} key={index}>
          <ResponsiveImage
            image={image.header_image}
            headerImage="headerImage"
          />
        </div>
      )
    })
    return <div className={styles.header_images}>{header_images}</div>
  } else {
    return null
  }
}

export default HeaderImages
