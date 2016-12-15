import React from 'react'
import { Site } from '../wp'
import PostPage from '../components/PostPage'

import { Provider } from 'react-redux'
import { initStore, reducer } from '../redux'
import { getSite } from '../redux/actions'

export default class extends React.Component {
  static async getInitialProps ({
    query: { id },
    req
    }
  ) {
    const isServer = !!req
    const store = initStore(reducer, {}, isServer)

    // const post = await wp.posts().id(id)
    const site = await Site.root()
    // const author = await wp.users().id(post.author)

    store.dispatch(getSite(site))
    return {
      initialState: store.getState(),
      isServer
    }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider>
        <PostPage />
      </Provider>
    )
  }

}
