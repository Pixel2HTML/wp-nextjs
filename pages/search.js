import { Component } from 'react'
import wp, { Site } from '../wp'
import SearchPage from '../components/SearchPage'

import { Provider } from 'react-redux'
import { initStore, reducer } from '../redux'
import { getSite, receiveResults, receiveSearchQuery } from '../redux/actions'

export default class extends Component {
  static async getInitialProps ({
    query: { s },
    req
  }) {
    const isServer = !!req
    const store = initStore(reducer, {}, isServer)

    const site = await Site.root()
    const results = await wp.posts().search(s)

    store.dispatch(getSite(site))
    store.dispatch(receiveResults(results))
    store.dispatch(receiveSearchQuery(s))

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
        <SearchPage />
      </Provider>
    )
  }

}
