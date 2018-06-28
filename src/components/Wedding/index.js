import React, { Component } from 'react'
import styles from './wedding.module.scss'

const Wedding = ({ doc }) => {
  // Get layouts

  const wedding = doc.data.body.map((slice, index) => {
    if (slice.slice_type === '2_scroll___1_fixed') {
      // Get images in this layout
      const sliceContent = slice.items.map((image, imageIndex) => {
        return <img src={image.scroll_photo.url} key={imageIndex} />
      })
      // Create an element to show images from the layout
      return (
        <div className={styles.cols_2} key={index}>
          <div className={styles.scroll}>{sliceContent}</div>
          {slice.primary && (
            <div className={styles.fixed}>
              <img src={slice.primary.fixed_photo.url} />
            </div>
          )}
        </div>
      )
    }
  })

  if (doc.data.body.length) {
    return <section className={styles.wedding}>{wedding}</section>
  } else {
    return null
  }
}

export default Wedding
