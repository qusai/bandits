import React, { Component } from 'react'
import ResponsiveImage from '../ResponsiveImage'
import styles from './modal.module.scss'

class Modal extends Component {
  componentDidMount() {
    document.body.ontouchmove = e => {
      e.preventDefault()
      return false
    }

    document.addEventListener('keydown', this.handleKeydown, false)
  }

  componentWillUnmount() {
    document.body.ontouchmove = () => {
      return true
    }

    document.removeEventListener('keydown', this.handleKeydown, false)
  }

  handleKeydown = e => {
    const { openModal } = this.props

    e.keyCode == 27 ? openModal() : null
  }

  render() {
    const { modalImage, openModal, delayModalClose } = this.props

    return (
      <div className={delayModalClose ? styles.modal_close : styles.modal}>
        <ResponsiveImage image={modalImage} openModal={openModal} />
      </div>
    )
  }
}

export default Modal
