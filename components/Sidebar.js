import React from 'react'
import SearchWidget from './SearchWidget'
import PostsWidget from './PostsWidget'
import CommentsWidgetContainer from './CommentsWidgetContainer'
import CategoriesWidgetContainer from './CategoriesWidgetContainer'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <SearchWidget />
        <PostsWidget />
        <CommentsWidgetContainer />
        <CategoriesWidgetContainer />
      </div>
    )
  }
}

export default Sidebar
