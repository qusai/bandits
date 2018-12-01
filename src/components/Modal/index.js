import React, { Component } from 'react'
import ResponsiveImage from '../ResponsiveImage'
import styles from './modal.module.scss'

class Modal extends Component {
  componentDidMount() {
    document.body.ontouchmove = e => {
      e.preventDefault()
      return false
    }
  }

  componentWillUnmount() {
    document.body.ontouchmove = () => {
      return true
    }
  }

  render() {
    const { modalImage, openModal } = this.props

    return (
      <div className={styles.modal}>
        <ResponsiveImage image={modalImage} openModal={openModal} />
      </div>
    )
  }
}

export default Modal
