import {Component} from 'react'
import {connect} from 'react-redux'
import {requestPosts} from '../redux/actions'

const actionCreators = {
  requestPosts
}

class LoadMorePosts extends Component {
  render () {
    return (
      <nav className='navigation pagination' role='navigation'>
        <h2 className='screen-reader-text'>Load More Posts</h2>
        <button>Load More</button>
      </nav>
    )
  }
}

export default connect(undefined, actionCreators)(LoadMorePosts)
