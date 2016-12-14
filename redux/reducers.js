import { combineReducers } from 'redux'
// Custom actions
import {
  GET_SITE,
  GET_CATEGORIES,
  GOT_CATEGORIES,
  GOT_COMMENTS,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from './actions'

import { preventDuplicatePosts } from './helpers'
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

/**
 * Get or update the recent comments from a source of truth
 */
function comments (state = {
  isFetching: false,
  gotError: false,
  items: []
}, action) {
  switch (action.type) {
    case GOT_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.comments
      })
    default: return state
  }
}

/**
 * Get or update the recent posts from a source of truth
 */
function posts (state = {
  isFetching: false,
  gotError: false,
  items: [],
  currentPage: 1
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: preventDuplicatePosts(state.items.concat(action.posts)),
        currentPage: state.currentPage++
      })
    default: return state
  }
}

/*
 * Our whole reducer combined from every other reducer
 */
export default combineReducers({
  site,
  categories,
  comments,
  posts
})
