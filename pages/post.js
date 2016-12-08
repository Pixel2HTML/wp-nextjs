import React from 'react'
import wp, { Site } from '../wp'

import Head from '../components/Head'
import Hero from '../components/Hero'
import Main from '../components/Main.js'
import SinglePost from '../components/SinglePost'

export default class extends React.Component {
  static async getInitialProps ({query: { id }}) {
    const post = await wp.posts().id(id)
    const data = await Site.root()
    const author = await wp.users().id(post.author)

    return {
      title: data.name,
      description: data.description,
      post: post,
      author: author
    }
  }

  render () {
    const post = this.props.post
    return (
      <div>
        <Head title={post.title.rendered} />
        <Hero title={this.props.title} description={this.props.description} hasimage />
        <Main hasSidebar>
          <SinglePost post={this.props.post} author={this.props.author} />
        </Main>
      </div>
    )
  }

}
