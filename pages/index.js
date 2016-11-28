import React from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import Post from '../components/Post'

const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

export default class extends React.Component {
  static async getInitialProps() {
    const res   = await fetch(baseURL+APIendpoint+'posts')
    const posts = await res.json()
    return { posts: posts }
  }
  render(){
    return(
      <div>
        {
          this.props.posts.map( (post, i) => (
            <Post key={i} id={post.id} title={post.title.rendered} link={post.link} excerpt={post.excerpt.rendered} />
          ))
        }
      </div>
    )
  }
}
