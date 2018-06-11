import React, { Component } from 'react'
import Link from 'gatsby-link'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'

class IndexPage extends Component {
	state = {
		doc: null,
	}

	linkResolver = doc => {
		if (doc.type == 'page') {
			return '/page/' + doc.uid
		} else if (doc.type == 'blog_post') {
			return '/blog/' + doc.uid
		}
		// Default to homepage
		return '/'
	}

	componentWillMount() {
		const apiEndpoint = 'https://bandits.cdn.prismic.io/api/v2'
		const accessToken =
			'MC5XeDNibENRQUFEWXVOTFcz.CQMB77-977-9a0vvv70tCCfvv706HHPvv73vv73vv70477-977-9OC1B77-977-9R--_ve-_vXcb77-9'
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
			console.log(document)
			return (
				<div>
					<h1>{document.wedding_name[0].text}</h1>
					<p>Welcome to your new Gatsby site.</p>
					<p>Now go build something great.</p>
					<Link to="/page-2/">Go to page 2</Link>
				</div>
			)
		}
		return <h1>loading...</h1>
	}
}

export default IndexPage
