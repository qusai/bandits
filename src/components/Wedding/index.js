import React, { Component } from 'react'
import styles from './wedding.module.scss'
import ResponsiveImage from '../ResponsiveImage'

const Wedding = ({ doc }) => {
  // Get layouts

  const wedding = doc.data.body.map((slice, index) => {
    const fixedPhoto = slice.primary.fixed_photo

    if (slice.slice_type === '2_scroll___1_fixed') {
      // Get images in this layout
      const scrollPhoto = slice.items.map((image, imageIndex) => {
        return <ResponsiveImage image={image.scroll_photo} key={imageIndex} />
      })
      // Create an element to show images from the layout
      return (
        <div className={styles.cols_2} key={index}>
          <div className={styles.scroll}>{scrollPhoto}</div>

          {slice.primary && (
            <div className={styles.fixed}>
              <ResponsiveImage image={fixedPhoto} />
            </div>
          )}
        </div>
      )
    }
  })

  // Conditional to show only markup if there's content
  if (doc.data.body.length) {
    return <section className={styles.wedding}>{wedding}</section>
  } else {
    return null
  }
}

export default Wedding
