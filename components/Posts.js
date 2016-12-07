import React from 'react'
import Post from './Post'
import Spinner from './Spinner'
import LoadMorePosts from './LoadMorePosts'
import wp from '../wp'

export default class Posts extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      totalPages: 1,
      currentPage: 1
    }
    this.renderPosts = this.renderPosts.bind(this)
  }

  async componentDidMount () {
    const posts = await wp.posts().page(1)
    let totalPages = posts._paging.totalPages
    this.setState({posts, totalPages})
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
    console.log(this.state.totalPages)
    return (
      <main id='main' className='site-main' role='main'>
        {posts.length ? this.renderPosts(posts) : <Spinner />}
        <LoadMorePosts />
      </main>
    )
  }
}
