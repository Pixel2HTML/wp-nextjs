import React from 'react'
import SingleComment from './SingleComment'
import CommentForm from './CommentForm'

export default class PostComments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {comments: []}
  }

  render () {
    return (
      <div id='comments' className='comments-area'>
        <h2 className='comments-title'>3 Replies to "Something about love"</h2>
        <ol className='comment-list'>
          <SingleComment />
        </ol>
        <CommentForm />
      </div>
    )
  }

}
