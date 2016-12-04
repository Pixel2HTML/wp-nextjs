import React from 'react'
import Post from './Post'
import Fetch from 'isomorphic-fetch'

export default class Posts extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const res = await Fetch('http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/posts')
    const posts = await res.json()
    this.setState({posts})
  }

  render () {
    return (
      <main>
        {this.state.posts.map((post) => (
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
