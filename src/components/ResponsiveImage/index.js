import React, { Component } from 'react';

export default class ResponsiveImage extends Component {
  render() {
    const { image } = this.props
    
    return (
      <picture>
        <source
          media="(max-width: 400px)"
          srcSet={image.md.url}
        />
        <source
          media="(max-width: 768px)"
          srcSet={image.lg.url}
        />
        <source
          media="(max-width: 2560px)"
          srcSet={image.xl.url}
        />
        <source srcSet={image.url} />
        <img src={image.url} alt="" />
      </picture>
      )
  }
} 