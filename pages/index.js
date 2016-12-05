import React from 'react'
import fetch from 'isomorphic-fetch'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Main from '../components/Main'
import config from '../config'

// Todo: add smooth scrollinggggg

export default class extends React.Component {
  static async getInitialProps () {
    // GET Name and Blog Description
    const res2 = await fetch(config.endpoint)
    const data = await res2.json()
    return {
      title: data.name,
      description: data.description
    }
  }
  render () {
    return (
      <div>
        <Head title={this.props.title} />
        <Hero title={this.props.title} description={this.props.description} hasimage frontPage />
        <div className='blog has-sidebar'>
          <Main hasSidebar />
        </div>
      </div>
    )
  }
}
