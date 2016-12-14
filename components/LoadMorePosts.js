import {Component} from 'react'
import {connect} from 'react-redux'
import {requestPosts, receivePosts} from '../redux/actions'
import wp from '../wp'

const actionCreators = {
  requestPosts,
  receivePosts
}

const mapStoreToProps = (store) => {
  return {
    currentPage: store.posts.currentPage
  }
}

class LoadMorePosts extends Component {
  constructor (props) {
    super(props)
    this.reqPosts = this.reqPosts.bind(this)
  }

  async reqPosts () {
    let { requestPosts, receivePosts, currentPage } = this.props
    requestPosts()
    const posts = await wp.posts().page(currentPage)
    receivePosts(posts)
  }

  render () {
    return (
      <nav className='navigation pagination' role='navigation'>
        <h2 className='screen-reader-text'>Load More Posts</h2>
        <button onClick={this.reqPosts}>Load More</button>
      </nav>
    )
  }
}

export default connect(mapStoreToProps, actionCreators)(LoadMorePosts)
