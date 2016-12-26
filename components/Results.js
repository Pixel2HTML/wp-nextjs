import { Component } from 'react'
import Post from './Post'
import Spinner from './Spinner'
import LoadMorePosts from './LoadMorePosts'
import wp from '../wp'

import { connect } from 'react-redux'
import { requestPosts, receivePosts } from '../redux/actions'

function mapStoreToProps (store) {
  return {
    posts: store.posts.items,
    isFetching: store.posts.isFetching,
    currentPage: store.posts.currentPage,
    totalPages: store.posts.totalPages
  }
}

const dispatchPropsToStore = {
  requestPosts,
  receivePosts
}

class Results extends Component {
  async componentDidMount () {
    let { currentPage, requestPosts, receivePosts } = this.props
    requestPosts()
    const posts = await wp.posts().page(currentPage)
    receivePosts(posts)
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

  renderLoadButton (condition) {
    if (condition) {
      return (<LoadMorePosts />)
    }
  }

  render () {
    let { posts, currentPage, isFetching, totalPages } = this.props
    // Logic to display or not the get more posts button
    return (
      <main id='main' className='site-main' role='main'>
        {posts.length ? this.renderPosts(posts) : null}
        {isFetching ? <Spinner /> : null}
        { this.renderLoadButton(currentPage < totalPages && !isFetching) }
      </main>
    )
  }
}

export default connect(mapStoreToProps, dispatchPropsToStore)(Posts)
