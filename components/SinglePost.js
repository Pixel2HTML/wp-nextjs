'use strict'
import React from 'react'
import PostHeader from './SinglePostHeader'
import PostFooter from './SinglePostFooter'

class SinglePost extends React.Component {
  render () {
    let post = this.props.post
    let author = this.props.author
    return (
      <main id='main' className='site-main' role='main'>
        <article className='single'>
          <PostHeader post={post} author={author} />
          <div className='entry-content' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
          <PostFooter post={post} />
        </article>
      </main>
    )
  }
}

export default SinglePost