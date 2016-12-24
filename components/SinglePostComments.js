import {Component} from 'react'
import SingleComment from './SingleComment'
import CommentForm from './CommentForm'

import wp from '../wp'
import {connect} from 'react-redux'
import { requestPostComments, receivePostComments } from '../redux/actions'

const mapStoreToProps = (store) => {
  return {
    postTitle: store.post.data.title.rendered,
    postID: store.post.data.id,
    comments: store.post.comments.data,
    commentStatus: store.post.data.comment_status,
    totalComments: store.post.comments.total,
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

  commentCount (title, count) {
    if (count && count === 1) {
      return (<h2 className='comments-title'>1 Reply to "{title}"</h2>)
    } else if (count && count > 1) {
      return (<h2 className='comments-title'>{count} Replies to "{title}"</h2>)
    }
  }

  render () {
    let { comments, postTitle, totalComments } = this.props
    return (
      <div id='comments' className='comments-area'>
        {this.commentCount(postTitle, totalComments)}
        <ol className='comment-list'>
          {this.renderComments(comments)}
        </ol>
        <CommentForm />
      </div>
    )
  }
}

export default connect(mapStoreToProps, dispatchPropsToStore)(PostComments)
