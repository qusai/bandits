import React, { Component } from 'react'
import Link from 'gatsby-link'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Body from '../components/Body'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import all from '../prismic'

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
    console.log(headerLoaded)

    return (
      <section>
        {!headerLoaded && <Loading />}
        <Header headerLoaded={this.headerLoaded} />
        <Body />
      </section>
    )
  }
}

export default IndexPage
