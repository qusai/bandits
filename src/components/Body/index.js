import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../prismic'
import Wedding from '../Wedding'
import Nav from '../Nav'
import Modal from '../Modal'
import styles from './body.module.scss'
import Helmet from 'react-helmet'

class Body extends Component {
  state = {
    weddings: [],
    isToggleOn: false,
    isModalOn: false,
    modalImage: null,
    delayModalClose: false,
  }

  componentWillMount() {
    // Get data from Prismic
    Prismic.api(apiEndpoint, { accessToken }).then(api => {
      api
        .query(Prismic.Predicates.at('document.type', 'wedding'))
        .then(response => {
          if (response) {
            this.setState({ weddings: response.results })
          }
        })
    })
  }

  navToggle = action => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))

    action == 'close' ? this.setState({ isToggleOn: false }) : null
  }

  delayModalClose = () => {
    this.setState({ delayModalClose: true })

    setTimeout(() => {
      this.setState({ isModalOn: false, delayModalClose: false })
    }, 1200)
  }

  openModal = image => {
    const { isModalOn } = this.state

    isModalOn
      ? this.delayModalClose()
      : this.setState({
          isModalOn: true,
          modalImage: image,
        })
  }

  render() {
    const {
      weddings,
      isToggleOn,
      isModalOn,
      modalImage,
      delayModalClose,
    } = this.state

    const wedding = weddings.map((wedding, index) => {
      return wedding.data.wedding_photos.length ? (
        <Wedding
          doc={wedding}
          key={index}
          openModal={this.openModal}
          isModalOn={isModalOn}
        />
      ) : null
    })

    return (
      <div className={styles.body}>
        <Helmet>
          <body class={isToggleOn || isModalOn ? 'nav_on' : null} />
        </Helmet>
        <Nav
          navToggle={this.navToggle}
          isToggleOn={isToggleOn}
          weddings={weddings}
        />
        {isModalOn ? (
          <Modal
            modalImage={modalImage}
            openModal={this.openModal}
            delayModalClose={delayModalClose}
          />
        ) : null}
        {wedding}
      </div>
    )
  }
}

export default Body
