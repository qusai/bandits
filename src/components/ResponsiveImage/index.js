import React, { Component } from 'react'
import styles from './responsive-image.module.scss'

class ResponsiveImage extends Component {
  state = {
    imageStatus: 'loading',
  }

  handleImageLoaded = () => {
    this.setState({ imageStatus: 'loaded' })
  }

  handleClick = e => {
    const { openModal, image } = this.props

    openModal(image)
  }

  render() {
    const { image, headerImage } = this.props
    const { imageStatus } = this.state

    return (
      <picture>
        <source media="(max-width: 400px)" srcSet={image.md.url} />
        <source media="(max-width: 768px)" srcSet={image.lg.url} />
        <source media="(max-width: 2560px)" srcSet={image.xl.url} />
        <source srcSet={image.url} />
        <img
          className={imageStatus == 'loaded' ? null : 'loading'}
          onClick={this.handleClick}
          onLoad={this.handleImageLoaded}
          src={image.url}
          tabIndex={headerImage ? null : '0'}
        />
      </picture>
    )
  }
}

export default ResponsiveImage
