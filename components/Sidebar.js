import React from 'react'
import Search from './Search'
import Recents from './Recents'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <Recents recentPosts={this.props.recentPosts} />
      </div>
    )
  }
}

export default Sidebar
