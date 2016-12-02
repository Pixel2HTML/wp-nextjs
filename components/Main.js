import React from 'react'
import Posts from './Posts'

export default class Main extends React.Component {

  render () {
    return (
      <div className='site-content-contain'>
        <div className='site-content' id='content'>
          <div className='wrap'>
            <header className='page-header'>
              <h2 className='page-title'>Posts</h2>
            </header>
            <div id='primary' className='content-area'>
              <Posts posts={this.props.posts} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
