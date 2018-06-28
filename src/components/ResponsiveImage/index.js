import React, { Component } from 'react'

const ResponsiveImage = ({ image }) => {
  return (
    <picture>
      <source media="(max-width: 400px)" srcSet={image.md.url} />
      <source media="(max-width: 768px)" srcSet={image.lg.url} />
      <source media="(max-width: 2560px)" srcSet={image.xl.url} />
      <source srcSet={image.url} />
      <img src={image.url} alt="" />
    </picture>
  )
}

export default ResponsiveImage
