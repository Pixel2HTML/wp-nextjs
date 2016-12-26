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
    query: store.search.query
  }
}

class SearchPage extends Component {
  render () {
    let {title, description, query} = this.props
    return (
      <div>
        <Head title={title} />
        <Hero title={title} description={description} hasimage />
        <Main hasSidebar hasHeader headerTitle={`Search Results for: ${query}`} isBlog >
          <Results />
        </Main>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(SearchPage)
