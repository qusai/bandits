import React, { Component } from 'react'
import styles from './wedding.module.scss'
import ResponsiveImage from '../ResponsiveImage'

const Wedding = ({ doc }) => {
  // Get layouts
  const wedding = doc.data.wedding_photos.map((photo, index) => {
    return (
      <div key={index} className={styles.wedding_image}>
        <ResponsiveImage image={photo.wedding_photo} />
      </div>
    )
  })

  return (
    <section className={styles.wedding}>
      <div className={styles.wedding_header}>
        <h2 className={styles.wedding_name}>
          <span className={styles.wedding_name_text}>
            {doc.data.wedding_name[0].text}
          </span>
        </h2>
      </div>
      {wedding}
    </section>
  )
}

export default Wedding
