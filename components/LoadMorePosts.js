'use strict'

import React from 'react'

export default class LoadMorePosts extends React.Component {
  render () {
    return (
      <nav className='navigation pagination' role='navigation'>
        <h2 className='screen-reader-text'>Load More Posts</h2>
        <button>Load More</button>
      </nav>
    )
  }
}
