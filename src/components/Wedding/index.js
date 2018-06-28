import React, { Component } from 'react'

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
        <div className="scroll 2-scroll" key={index}>
          {sliceContent}
        </div>
      )
    }
  })

  return (
    <section className="wedding">
      <div>{wedding}</div>
    </section>
  )
}

export default Wedding
