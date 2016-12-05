'use strict'
import React from 'react'
import Fetch from 'isomorphic-fetch'

const baseURL = 'http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/'

class CommentsWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
    this.fetchPostForComment = this.fetchPostForComment.bind(this)
  }

  async fetchFromAPI (path) {
    let response = await Fetch(baseURL + path)
    return response.json()
  }

  async fetchPostForComment (comment) {
    let post = await this.fetchFromAPI('posts/' + comment.post)
    comment.post_name = post.title.rendered
    return comment
  }

  async componentDidMount () {
    const comments = await this.fetchFromAPI('comments')
    Promise.all(comments.slice(0, 5).map(this.fetchPostForComment))
      .then(comments => { this.setState({comments}) })
  }

  render () {
    return (
      <section id='recent-comments-2' className='widget widget_recent_comments'>
        <h2 className='widget-title'>Recent Comments</h2>
        <ul id='recentcomments'>
          {this.state.comments.map(comment => (
            <li key={comment.id} className='recentcomments'>
              <span className='comment-author-link'>
                <a href={comment.author_url}>{comment.author_name}</a>
              </span> on <a href={comment.link}>{comment.post_name}</a>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default CommentsWidget
