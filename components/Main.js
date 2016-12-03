import React from 'react'
import Posts from './Posts'
import Sidebar from './Sidebar'

export default class Main extends React.Component {

  render () {
    let siteContent = 'site-content-contain'
    if (this.props.hasSidebar) siteContent += ' has-sidebar'

    return (
      <div className={siteContent}>
        <div className='site-content' id='content'>
          <div className='wrap'>
            <header className='page-header'>
              <h2 className='page-title'>Posts</h2>
            </header>
            <div id='primary' className='content-area'>
              <Posts posts={this.props.posts} />
            </div>
            <aside id='secondary' className='widget-area' role='complementary'>
              <Sidebar
                recentPosts={this.props.recentPosts}
              />
            </aside>
          </div>
        </div>
      </div>
    )
  }
}
