import React from 'react'
import Post from './Post'
import Fetch from 'isomorphic-fetch'
import Spinner from './Spinner'

export default class Posts extends React.Component {

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
    this.setState({posts})
  }

  renderPosts (posts) {
    return posts.map(post => (
      <Post
        key={post.id}
        id={post.id}
        title={post.title.rendered}
        link={post.link}
        time={post.date}
        excerpt={post.excerpt.rendered}
      />
    ))
  }

  render () {
    let posts = this.state.posts
    return (
      <main id='main' className='site-main' role='main'>
        {posts.length ? this.renderPosts(posts) : <Spinner />}
      </main>
    )
  }
}
