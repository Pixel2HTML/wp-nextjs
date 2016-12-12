'use strict'
import React from 'react'
import Search from './Search'
import PostsWidget from './PostsWidget'
import CommentsWidgetContainer from './CommentsWidgetContainer'
import CategoriesWidgetContainer from './CategoriesWidgetContainer'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <PostsWidget />
        <CommentsWidgetContainer />
        <CategoriesWidgetContainer />
      </div>
    )
  }
}

export default Sidebar
