import {Component} from 'react'
import Head from './Head'
import Hero from './Hero'
import Main from './Main'
import SinglePost from './SinglePost'

export default class PostPage extends Component {
  render () {
    return (
      <div>
        <Head title='Post' />
        <Hero title='A title' description='A description' hasimage />
        <Main hasSidebar>
          <SinglePost post='A post' author='An author' />
        </Main>
      </div>
    )
  }
}
