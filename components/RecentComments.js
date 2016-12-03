import React from 'react'
import fetch from 'isomorphic-fetch'

const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

class RecentComments extends React.Component {
  render () {
    // Add the post title to each comment
    const comments = this.props.recentComments
    comments.forEach(async comment => {
      let postID = comment.post
      let res = await fetch(baseURL + APIendpoint + 'posts/' + postID)
      let post = await res.json()
      comment.post_name = post.title.rendered
    })

    return (
      <section id='recent-comments-2' className='widget widget_recent_comments'>
        <h2 className='widget-title'>Recent Comments</h2>
        <ul id='recentcomments'>
          {comments.map(comment => (
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

export default RecentComments
