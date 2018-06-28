import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Body from '../components/Body'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import all from '../prismic'

class IndexPage extends Component {
  render() {
    return (
      <section>
        <Header />
        <Body />
      </section>
    )
  }
}

export default IndexPage
