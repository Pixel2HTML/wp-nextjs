import React from 'react'
import fetch from 'isomorphic-fetch'
import Post from '../components/Post'
import Head from '../components/Head'

const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

export default class extends React.Component {
  static async getInitialProps ({query: { id }}) {
    const res = await fetch(baseURL + APIendpoint + 'posts/' + id)
    const post = await res.json()
    return {
      post: post
    }
  }

  render () {
    const post = this.props.post

    return (
      <div>
        <Head title={post.title.rendered} />
        <Post
          key={post.id}
          id={post.id}
          title={post.title.rendered}
          link={post.link}
          excerpt={post.excerpt.rendered} />
      </div>

    )
  }

}
