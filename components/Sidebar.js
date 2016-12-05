'use strict'
import React from 'react'
import Search from './Search'
import PostsWidget from './PostsWidget'
import CommentsWidget from './CommentsWidget'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <PostsWidget />
        <CommentsWidget />
      </div>
    )
  }
}

export default Sidebar
