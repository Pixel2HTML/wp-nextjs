'use strict'
import React from 'react'
/* import Fetch from 'isomorphic-fetch' */
// import Spinner form './Spinner'
// const baseURL = 'http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/'

export default class PostComments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {comments: []}
  }

  render () {
    return (
      <div id='comments' className='comments-area'>
        <h2 className='comments-title'>Comments go here</h2>
        <ol className='comment-list'>
          <li>A comment</li>
          <li>Another comment</li>
        </ol>
      </div>
    )
  }

}
