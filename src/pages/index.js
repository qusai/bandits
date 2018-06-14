import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'

class IndexPage extends Component {
	state = {
		doc: null,
	}

	linkResolver = doc => {
		if (doc.type == 'repeatable') {
			return '/wedding/' + doc.uid
		}
		// Default to homepage
		return '/'
	}

	componentWillMount() {
		const apiEndpoint = process.env.GATSBY_PRISMIC_ENDPOINT
		const accessToken = process.env.GATSBY_PRISMIC_ACCESS_TOKEN
		Prismic.api(apiEndpoint, { accessToken }).then(api => {
			api
				.query(Prismic.Predicates.at('document.type', 'wedding'))
				.then(response => {
					if (response) {
						this.setState({ doc: response.results[0] })
					}
				})
		})
	}

	render() {
		if (this.state.doc) {
			const document = this.state.doc.data
			return <Header />
		}
		return <h1>loading...</h1>
	}
}

export default IndexPage
