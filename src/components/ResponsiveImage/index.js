import React, { Component } from 'react'

class ResponsiveImage extends Component {
  state = {
    loaded: false,
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  handleClick = () => {
    const { openModal, image } = this.props

    openModal(image)
  }

  render() {
    const { image } = this.props
    const { loaded } = this.state

    const loading = {
      filter: 'blur(20px)',
      overflow: 'hidden',
      transform: 'scale(1.1)',
    }

    if (loaded) {
      return (
        <picture>
          <source media="(max-width: 400px)" srcSet={image.md.url} />
          <source media="(max-width: 768px)" srcSet={image.lg.url} />
          <source media="(max-width: 2560px)" srcSet={image.xl.url} />
          <source srcSet={image.url} />
          <img src={image.url} alt="" onClick={this.handleClick} />
        </picture>
      )
    }

    return (
      <picture style={loading}>
        <source srcSet={image.md.url} />
        <img src={image.url} alt="" />
      </picture>
    )
  }
}

export default ResponsiveImage
