import { combineReducers } from 'redux'
// Custom actions
import {
  GET_SITE,
  GET_CATEGORIES,
  GOT_CATEGORIES
} from './actions'

/**
 * Get or update the site from a source of truth
 * @param {object} state
 * @param {object} action Must have a type and modifier
 * @returns {object} A new state gets returned
 */
function site (state = {}, action) {
  switch (action.type) {
    case GET_SITE:
      return Object.assign({}, state, {
        root: action.site
      })
    default: return state
  }
}

/**
 * Get or update the categories from a source of truth
 * since this is async we need some params for state update
 * @param {object} state
 * @param {object} action
 * @returns {object} a new state
 */
function categories (state = {
  isFetching: false,
  gotError: false,
  items: []
}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case GOT_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.categories
      })
    default: return state
  }
}

/*
 * Our whole reducer combined from every other reducer
 */
const wpApp = combineReducers({
  site,
  categories
})

export default wpApp
