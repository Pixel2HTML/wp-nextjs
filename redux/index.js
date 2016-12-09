import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

export const reducer = reducers

/*
 * Creating an isomorphic store. When in server make a new one in client persist it
 */
export const initStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
    }
    return window.store
  }
}
