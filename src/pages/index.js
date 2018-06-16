import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Body from '../components/Body'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'

class IndexPage extends Component {
  state = {
    doc: null,
    scrollTop: '',
  }

  linkResolver = doc => {
    if (doc.type == 'repeatable') {
      return '/wedding/' + doc.uid
    }
    // Default to homepage
    return '/'
  }

  componentWillMount() {
    // Setup Prismic connection
    const apiEndpoint = process.env.GATSBY_PRISMIC_ENDPOINT
    const accessToken = process.env.GATSBY_PRISMIC_ACCESS_TOKEN

    // Get data from Prismic
    Prismic.api(apiEndpoint, { accessToken }).then(api => {
      api
        .query(Prismic.Predicates.any('document.type', ['header', 'wedding']))
        .then(response => {
          if (response) {
            this.setState({ doc: response.results[0] })
          }
        })
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    let scrollTop = window.scrollY
    this.setState({ scrollTop: scrollTop })
  }

  render() {
    if (this.state.doc) {
      const { doc, scrollTop } = this.state
      const document = doc.data

      return (
        <section ref="body">
          <Header scrollTop={scrollTop} doc={document} />
          <Body />
        </section>
      )
    }
    return <h1>loading...</h1>
  }
}

export default IndexPage
