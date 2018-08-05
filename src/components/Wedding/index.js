import React, { Component } from 'react'
import styles from './wedding.module.scss'
import ResponsiveImage from '../ResponsiveImage'

const Wedding = ({ doc }) => {
  // Get layouts

  const wedding = doc.data.wedding_photos.map((photo, index) => {
    return (
      <div key={index}>
        <ResponsiveImage image={photo.wedding_photo} />
      </div>
    )
  })

  // Conditional to show markup only if there's content
  return (
    <section className={styles.wedding}>
      {doc.data.wedding_photos.length && wedding}
    </section>
  )
}

export default Wedding
