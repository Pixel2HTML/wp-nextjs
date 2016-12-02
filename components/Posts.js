import React from 'react'
import Post from './Post'

export default class Posts extends React.Component {

  render () {
    return (
      <main>
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
    )
  }
}
