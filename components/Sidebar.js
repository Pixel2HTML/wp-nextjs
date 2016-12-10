'use strict'
import React from 'react'
import Search from './Search'
import PostsWidget from './PostsWidget'
import CommentsWidgetContainer from './CommentsWidgetContainer'
import CategoriesWidget from './CategoriesWidget'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <PostsWidget />
        <CommentsWidgetContainer />
        <CategoriesWidget />
      </div>
    )
  }
}

export default Sidebar
