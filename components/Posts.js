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
    paging: store.posts.items._paging,
    debug: store.posts
  }
}

const dispatchPropsToStore = {
  requestPosts,
  receivePosts
}

class Posts extends Component {
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
    let { posts, paging, currentPage, isFetching } = this.props
    // Logic to display or not the get more posts button
    let totalPages
    if (paging) {
      totalPages = paging.totalPages
    } else {
      totalPages = 1
    }

    console.log(totalPages)
    return (
      <main id='main' className='site-main' role='main'>
        {isFetching ? <Spinner /> : this.renderPosts(posts)}
        { this.renderLoadButton(currentPage <= totalPages && !isFetching) }
      </main>
    )
  }
}

export default connect(mapStoreToProps, dispatchPropsToStore)(Posts)
