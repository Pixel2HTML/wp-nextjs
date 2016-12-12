import { combineReducers } from 'redux'
import { GET_SITE } from './actions'

function site (state = {}, action) {
  switch (action.type) {
    case GET_SITE:
      return Object.assign({}, state, {
        root: action.site
      })
    default:
      return state
  }
}

/*
 * Our whole reducer combined from every other reducer
 */
const wpApp = combineReducers({
  site
})

export default wpApp
