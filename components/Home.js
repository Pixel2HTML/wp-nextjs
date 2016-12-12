import React from 'react'
import Head from './Head'
import Hero from './Hero'
import Main from './Main'
import Posts from './Posts'

import { connect } from 'react-redux'

const mapStoreToProps = (store) => {
  return {
    title: store.site.root.name,
    description: store.site.root.description
  }
}

class Home extends React.Component {
  render () {
    let { title, description } = this.props
    return (
      <div>
        <Head title={title} />
        <Hero title={title} description={description} hasimage frontPage />
        <Main hasSidebar hasHeader headerTitle='Posts'>
          <Posts />
        </Main>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(Home)
