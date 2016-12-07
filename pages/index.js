import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Posts from '../components/Posts'
import { Site } from '../wp'

export default class extends React.Component {
  static async getInitialProps () {
    const site = await Site.root()
    return {
      title: site.name,
      description: site.description
    }
  }
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
