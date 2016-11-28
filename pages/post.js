import React from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import Post from '../components/Post'
import * as  _ from 'lodash'

const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

export default class extends React.Component {
  static async getInitialProps({query: { id }}) {

    const res   = await fetch(baseURL + APIendpoint + 'posts/'+ id)
    const post = await res.json()


    return {
      post: post
    }
  }
  render(){
    const post = this.props.post

    return(
      <div>
        {
          <Post key={post.id} id={post.id} title={post.title.rendered} link={post.link} excerpt={post.excerpt.rendered} />
        }
      </div>
    )
  }
}
