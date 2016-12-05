'use strict'

import React from 'react'
import Link from 'next/link'
import Fetch from 'isomorphic-fetch'


class PostsWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const res = await Fetch('http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/posts')
    const posts = await res.json()
    this.setState({posts: posts.slice(0,5)})
  }

  render () {
    return (
      <section id='recent-posts-2' className='widget widget_recent_entries'>
        <h2 className='widget-title'>Recent Posts</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>{post.title.rendered}</Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default PostsWidget
