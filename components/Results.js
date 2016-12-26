import { Component } from 'react'
import Post from './Post'
import Search from './Search'
import { connect } from 'react-redux'

function mapStoreToProps (store) {
  return {
    results: store.search.results,
    search: store.search
  }
}

class Results extends Component {

  renderPosts (posts) {
    return posts.map(post => (
      <Post
        key={post.id}
        id={post.id}
        title={post.title.rendered}
        link={post.link}
        time={post.date}
        excerpt={post.excerpt.rendered}
      />
    ))
  }

  renderEmpty () {
    return (
      <div>
        <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
        <Search />
      </div>
    )
  }

  render () {
    let { results } = this.props
    // Logic to display or not the get more posts button
    return (
      <main id='main' className='site-main' role='main'>
        {results.length ? this.renderPosts(results) : this.renderEmpty()}
      </main>
    )
  }
}

export default connect(mapStoreToProps)(Results)
