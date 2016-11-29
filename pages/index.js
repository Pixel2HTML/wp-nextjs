import React from 'react'
import fetch from 'isomorphic-fetch'
import Header from '../components/Header'
import Post from '../components/Post'
import Hero from '../components/Hero'
const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch(baseURL + APIendpoint + 'posts')

    const posts = await res.json()
    return { posts: posts }
  }
  render () {
    return (
      <div>
        <Header title='My Awesome Pixel Blog' />
        <Hero />
        <div className='site-content-contain'>
          {this.props.posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title.rendered}
              link={post.link}
              excerpt={post.excerpt.rendered} />
           ))}
        </div>
      </div>
    )
  }
}
