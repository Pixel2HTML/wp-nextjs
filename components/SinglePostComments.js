import {Component} from 'react'
import SingleComment from './SingleComment'
import CommentForm from './CommentForm'

import wp from '../wp'
import {connect} from 'react-redux'
import { requestPostComments, receivePostComments } from '../redux/actions'

const mapStoreToProps = (store) => {
  return {
    post: store.post.data,
    postID: store.post.data.id,
    comments: store.post.comments.data,
    commentStatus: store.post.data.comment_status,
    isFetching: store.post.comments.isFetching,
    debug: store.post
  }
}

const dispatchPropsToStore = {
  requestPostComments,
  receivePostComments
}

class PostComments extends Component {
  async componentDidMount () {
    let { postID, requestPostComments, receivePostComments } = this.props
    requestPostComments()
    let comments = await wp.comments().forPost(postID)
    receivePostComments(comments)
  }

  renderComments (comments) {
    if (comments && comments.length) {
      return (
        comments.map(comment => (
          <SingleComment
            key={comment.id}
            avatarUrl={comment.author_avatar_urls[96]}
            authorUrl={comment.author_url}
            authorName={comment.author_name}
            date={comment.date}
            content={comment.content.rendered}
          />
        ))
      )
    }
  }

  render () {
    let { comments } = this.props
    return (
      <div id='comments' className='comments-area'>
        <h2 className='comments-title'>3 Replies to "Something about love"</h2>
        <ol className='comment-list'>
          {this.renderComments(comments)}
        </ol>
        <CommentForm />
      </div>
    )
  }
}

export default connect(mapStoreToProps, dispatchPropsToStore)(PostComments)
