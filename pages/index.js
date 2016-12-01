import React from 'react'
import fetch from 'isomorphic-fetch'
import Head from '../components/Head'
import Posts from '../components/Posts'
import Hero from '../components/Hero'
const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

// Todo: add smooth scrollinggggg

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch(baseURL + APIendpoint + 'posts')

    const posts = await res.json()
    return { posts: posts }
  }
  render () {
    return (
      <div>
        <Head title='My Awesome Pixel Blog' />
        <Hero hasimage frontPage />
        <div className='blog'>
          <Posts posts={this.props.posts} />
        </div>
      </div>
    )
  }
}
