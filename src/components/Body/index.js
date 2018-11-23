import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../prismic'
import Wedding from '../Wedding'
import Nav from '../Nav'
import styles from './body.module.scss'
import Helmet from 'react-helmet'

class Body extends Component {
  state = {
    weddings: [],
    isToggleOn: false,
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

  render() {
    const { weddings, isToggleOn } = this.state

    const wedding = weddings.map((wedding, index) => {
      return wedding.data.wedding_photos.length ? (
        <Wedding doc={wedding} key={index} />
      ) : null
    })

    return (
      <div className={styles.body}>
        <Helmet>
          <body class={isToggleOn ? 'nav_on' : null} />
        </Helmet>
        <Nav
          navToggle={this.navToggle}
          isToggleOn={isToggleOn}
          weddings={weddings}
        />
        {wedding}
      </div>
    )
  }
}

export default Body
