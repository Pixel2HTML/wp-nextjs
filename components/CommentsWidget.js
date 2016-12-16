import React from 'react'
import Spinner from './Spinner'
import wp from '../wp'
import Link from 'next/link'

class CommentsWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
    this.fetchPostForComment = this.fetchPostForComment.bind(this)
    this.renderComments = this.renderComments.bind(this)
  }

  async fetchFromAPI (path) {
    return wp[path]()
  }

  async fetchPostForComment (comment) {
    let post = await wp.posts().id(comment.post)
    comment.post_name = post.title.rendered
    return comment
  }

  async componentDidMount () {
    const comments = await this.fetchFromAPI('comments')
    Promise.all(comments.slice(0, 5).map(this.fetchPostForComment))
      .then(comments => { this.setState({comments}) })
  }

  renderComments (comments) {
    return comments.map(comment => (
      <li key={comment.id} className='recentcomments'>
        <span className='comment-author-link'>
          <a href={comment.author_url}>{comment.author_name}</a>
        </span> on <Link href={`/post?id=${comment.post}`}>{comment.post_name}</Link>
      </li>
    ))
  }

  render () {
    let comments = this.state.comments
    return (
      <section id='recent-comments-2' className='widget widget_recent_comments'>
        <h2 className='widget-title'>Recent Comments</h2>
        <ul id='recentcomments'>
          {comments.length ? this.renderComments(comments) : <Spinner />}
        </ul>
      </section>
    )
  }
}

export default CommentsWidget
