import React from 'react'
import Link from 'next/link'

class Recents extends React.Component {
  render () {
    return (
      <section id='recent-posts-2' className='widget widget_recent_entries'>
        <h2 className='widget-title'>Recent Posts</h2>
        <ul>
          {this.props.recentPosts.map(post => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>{post.title.rendered}</Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default Recents
