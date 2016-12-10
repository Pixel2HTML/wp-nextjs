import React from 'react'
import { initStore, reducer } from '../redux'
import { Provider } from 'react-redux'
import { getSite } from '../redux/actions'
import { Site } from '../wp'
import Home from '../components/Home'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    console.log(reducer)
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
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
    console.log(this.props)
    return (
      <Provider store={this.store}>
        <Home />
      </Provider>
    )
  }
}
