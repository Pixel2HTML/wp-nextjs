'use strict'
import React from 'react'
import Search from './Search'
import PostsWidget from './PostsWidget'
import CommentsWidget from './CommentsWidget'
import CategoriesWidget from './CategoriesWidget'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <PostsWidget />
        <CommentsWidget />
        <CategoriesWidget />
      </div>
    )
  }
}

export default Sidebar
