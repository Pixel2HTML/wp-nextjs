import { Component } from 'react'
import Head from './Head'
import Hero from './Hero'
import Main from './Main'
import { connect } from 'react-redux'

const mapStoreToProps = store => {
  return {
    title: store.site.root.name,
    description: store.site.root.description
  }
}

class SearchPage extends Component {
  render () {
    let {title, description} = this.props
    return (
      <div>
        <Head title={title} />
        <Hero title={title} description={description} hasimage />
        <Main hasSidebar>
          <h2>Search Situation</h2>
        </Main>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(SearchPage)
