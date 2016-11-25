import React from 'react'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps() {
    const res   = await fetch('http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/posts')
    const posts = await res.json()
    return { posts: posts }
  }
  render(){
    return(
      <div>
      <ul>
        {
           this.props.posts.map( (post, i) => (
             <li key={i}>
              <Link href={post.link}>
                {post.title.rendered}
              </Link>
             </li>
           ))
        }
      </ul>
      </div>
    )
  }
}
