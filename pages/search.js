import { Component } from 'react'
import { Site } from '../wp'
import SearchPage from '../components/SearchPage'

import { Provider } from 'react-redux'
import { initStore, reducer } from '../redux'
import { getSite } from '../redux/actions'

export default class extends Component {
  static async getInitialProps ({
    query: { s },
    req
  }) {
    const isServer = !!req
    const store = initStore(reducer, {}, isServer)

    const site = await Site.root()

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
      <Provider store={this.store}>
        <SearchPage />
      </Provider>
    )
  }

}
