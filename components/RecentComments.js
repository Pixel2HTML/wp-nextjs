import React from 'react'
import fetch from 'isomorphic-fetch'

const baseURL = 'http://wp.pixel2html.com/examples/nextjs/'
const APIendpoint = 'wp-json/wp/v2/'

class RecentComments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  async componentDidMount () {
    const res = await fetch(baseURL + APIendpoint + 'comments')
    const data = await res.json()
    const comments = data.slice(0, 5)
    comments.forEach(async comment => {
      const res2 = await fetch(baseURL + APIendpoint + 'posts/' + comment.post)
      const post = await res2.json()
      comment.post_name = post.title.rendered
      this.setState(oldState => oldState.comments.push(comment))
    })
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

export default RecentComments