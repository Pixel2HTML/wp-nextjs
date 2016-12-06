'use strict'
import React from 'react'
import PostHeader from './SinglePostHeader'
import PostFooter from './SinglePostFooter'
import PostComments from './SinglePostComments'

class SinglePost extends React.Component {
  render () {
    let post = this.props.post
    let author = this.props.author
    return (
      <main id='main' className='site-main' role='main'>
        <article className='single single-post'>
          <PostHeader post={post} author={author} />
          <div className='entry-content' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
          <PostFooter post={post} />
        </article>
        <PostComments />
      </main>
    )
  }
}

export default SinglePost
