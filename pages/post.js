import React from 'react'
import fetch from 'isomorphic-fetch'
// import Post from '../components/Post'
import Head from '../components/Head'
import Hero from '../components/Hero'
import config from '../config'
import Main from '../components/Main.js'

export default class extends React.Component {
  static async getInitialProps ({query: { id }}) {
    const res = await fetch(config.oldEnpoint + '/wp/v2/posts/' + id)
    const post = await res.json()
    const res2 = await fetch(config.oldEnpoint)
    const data = await res2.json()
    return {
      title: data.name,
      description: data.description,
      post: post
    }
  }

  render () {
    const post = this.props.post
    return (
      <div>
        <Head title={post.title.rendered} />
        <Hero title={this.props.title} description={this.props.description} hasimage />
        <Main hasSidebar>
          <h2>A post shall be made</h2>
        </Main>
      </div>
    )
  }

}
