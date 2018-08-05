import React, { Component } from 'react'
import styles from './wedding.module.scss'
import ResponsiveImage from '../ResponsiveImage'

const Wedding = ({ doc }) => {
  // Get layouts
  console.log(doc.data)

  const wedding = doc.data.wedding_photos.map((photo, index) => {
    return (
      <div key={index}>
        <ResponsiveImage image={photo.wedding_photo} />
      </div>
    )
  })

  // Conditional to show markup only if there's content
  if (doc.data.body.length) {
    return <section className={styles.wedding}>{wedding}</section>
  } else {
    return null
  }
}

export default Wedding
