import React from 'react'
import fetch from 'isomorphic-fetch'
import Head from '../components/Head'
import Hero from '../components/Hero'
import config from '../config'
import Main from '../components/Main.js'
import SinglePost from '../components/SinglePost'

export default class extends React.Component {
  static async getInitialProps ({query: { id }}) {
    const res = await fetch(config.endpoint + '/wp/v2/posts/' + id)
    const post = await res.json()

    const res2 = await fetch(config.endpoint)
    const data = await res2.json()

    const res3 = await fetch(config.endpoint + '/wp/v2/users/' + post.author)
    const author = await res3.json()

    return {
      title: data.name,
      description: data.description,
      post: post,
      author: author
    }
  }

  render () {
    const post = this.props.post
    return (
      <div>
        <Head title={post.title.rendered} />
        <Hero title={this.props.title} description={this.props.description} hasimage />
        <Main hasSidebar>
          <SinglePost post={this.props.post} author={this.props.author} />
        </Main>
      </div>
    )
  }

}
