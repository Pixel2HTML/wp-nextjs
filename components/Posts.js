import React from 'react'
import Post from './Post'

export default class Hero extends React.Component {

  render () {
    return (
      <div className='site-content-contain'>
        <div id='content' className='site-content'>
          <div className='wrap'>
            <header className='page-header'>
              <h2 className='page-title'>Posts</h2>
            </header>
            <div className='content-area' id='primary'>
              <main id='main' className='site-main' role='main'>
                {this.props.posts.map((post) => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title.rendered}
                    link={post.link}
                    time={post.date}
                    excerpt={post.excerpt.rendered} />
                 ))}
              </main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
