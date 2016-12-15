import {Component} from 'react'
import Head from './Head'
import Hero from './Hero'
import Main from './Main'
import SinglePost from './SinglePost'
import { connect } from 'react-redux'

const mapStoreToProps = (store) => {
  return {
    title: store.site.root.name,
    description: store.site.root.description,
    post: store.post.data,
    postTitle: store.post.data.title.rendered,
    author: store.post.author
  }
}

class PostPage extends Component {
  render () {
    let {title, description, post, author, postTitle} = this.props
    return (
      <div>
        <Head title={postTitle} />
        <Hero title={title} description={description} hasimage />
        <Main hasSidebar>
          <SinglePost post={post} author={author} />
        </Main>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(PostPage)
