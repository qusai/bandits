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

    return (
      <div>
        {weddings.length &&
          weddings.map((wedding, index) => {
            return <Wedding doc={wedding} key={index} />
          })}
      </div>
    )
  }
}

export default Body
