import { Component } from 'react'
import Head from './Head'
import Hero from './Hero'
import Main from './Main'
import Results from './Results'
import { connect } from 'react-redux'

const mapStoreToProps = store => {
  return {
    title: store.site.root.name,
    description: store.site.root.description,
    query: store.search.query,
    results: store.search.results
  }
}

class SearchPage extends Component {

  checkTitle (query, results) {
    if (results.length) {
      return `Search Results for ${query}`
    } else {
      return 'Nothing Found'
    }
  }

  render () {
    let {title, description, query, results} = this.props
    return (
      <div>
        <Head title={title} />
        <Hero title={title} description={description} hasimage />
        <Main hasSidebar hasHeader headerTitle={this.checkTitle(query, results)} isBlog >
          <Results />
        </Main>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(SearchPage)
