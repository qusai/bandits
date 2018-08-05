import React, { Component } from 'react'
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken } from '../../prismic'
import Wedding from '../Wedding'
import styles from './body.module.scss'

class Body extends Component {
  state = {
    weddings: [],
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

  render() {
    const { weddings } = this.state
    const wedding = weddings.map((wedding, index) => {
      console.log(wedding.data.wedding_photos)
      return wedding.data.wedding_photos.length ? (
        <Wedding doc={wedding} key={index} />
      ) : null
    })

    return <div className={styles.body}>{wedding}</div>
  }
}

export default Body
