import React from 'react'
import Search from './Search'
import Recents from './Recents'
import RecentComments from './RecentComments'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <Search />
        <Recents />
        <RecentComments />
      </div>
    )
  }
}

export default Sidebar
