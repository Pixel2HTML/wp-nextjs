import React from 'react'
import Head from './Head'
import Hero from './Hero'
import Main from './Main'
import Posts from './Posts'

// import { connect } from 'react-redux'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <Head title={this.props.title} />
        <Hero title={this.props.title} description={this.props.description} hasimage frontPage />
        <Main hasSidebar hasHeader headerTitle='Posts'>
          <Posts />
        </Main>
      </div>
    )
  }
}
