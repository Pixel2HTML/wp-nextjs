'use strict'

import React from 'react'
import Link from 'next/link'
import Fetch from 'isomorphic-fetch'
import Spinner from './Spinner'

class PostsWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.renderPosts = this.renderPosts.bind(this)
  }

  async componentDidMount () {
    const res = await Fetch('http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/posts')
    const posts = await res.json()
    this.setState({posts: posts.slice(0, 5)})
  }

  renderPosts (posts) {
    return posts.map(post => (
      <li key={post.id}>
        <Link href={`/post?id=${post.id}`}>{post.title.rendered}</Link>
      </li>
    ))
  }

  render () {
    let posts = this.state.posts
    return (
      <section id='recent-posts-2' className='widget widget_recent_entries'>
        <h2 className='widget-title'>Recent Posts</h2>
        <ul>
          {posts.length ? this.renderPosts(posts) : <Spinner />}
        </ul>
      </section>
    )
  }
}

export default PostsWidget
