import React from 'react'
import wp, { Site } from '../wp'
import PostPage from '../components/PostPage'

import { Provider } from 'react-redux'
import { initStore, reducer } from '../redux'
import { getSite, receivePost, receiveAuthor } from '../redux/actions'

export default class extends React.Component {
  static async getInitialProps ({
    query: { id },
    req
    }
  ) {
    // The usual store initialization
    const isServer = !!req
    const store = initStore(reducer, {}, isServer)

    // Get all of of important data to begin with
    const post = await wp.posts().id(id)
    const site = await Site.root()
    const author = await wp.users().id(post.author)

    // Placing all of that data into the store
    store.dispatch(getSite(site))
    store.dispatch(receivePost(post))
    store.dispatch(receiveAuthor(author))
    // Placing the store as initial props
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
      <Provider store={this.store}>
        <PostPage />
      </Provider>
    )
  }

}
