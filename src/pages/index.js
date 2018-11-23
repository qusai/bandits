import React, { Component } from 'react'
import Link from 'gatsby-link'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import all from '../prismic'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

class IndexPage extends Component {
  state = {
    headerLoaded: false,
  }

  headerLoaded = () => {
    setTimeout(() => {
      this.setState({ headerLoaded: true })
    }, 0)
  }

  render() {
    const { headerLoaded } = this.state

    return (
      <section>
        {!headerLoaded && <Loading />}
        <Header headerLoaded={this.headerLoaded} />
        <Body />
        <Footer />
      </section>
    )
  }
}

export default IndexPage
