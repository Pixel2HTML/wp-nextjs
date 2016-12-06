'use strict'

import React from 'react'
const moment = require('moment')

export default class PostHeader extends React.Component {
  render () {
    let post = this.props.post
    let author = this.props.author
    return (
      <header className='entry-header'>
        <div className='entry-meta'>
          <span className='posted-on'>
            <span className='screen-reader-text'>Posted On</span>
            <a rel='bookmark'>
              <time className='entry-date'>
                {moment(post.date).format('LL')}
              </time>
            </a>
          </span>
          <span className='byline'>
            <span> by </span>
            <span className='author vcard'>
              <a className='url fn n' href={author.link}>{author.name}</a>
            </span>
          </span>
        </div>
        <h1 className='entry-title'>{post.title.rendered}</h1>
      </header>
    )
  }
}
