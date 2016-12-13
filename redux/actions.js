// All of our action types
export const GET_SITE = 'GET_SITE'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GOT_CATEGORIES = 'GOT_CATEGORIES'
export const GOT_COMMENTS = 'GOT_COMMENTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

/**
 *  Fetch the root site info
 *  @param {object} site - the new site to update
 */
export function getSite (site) {
  return {
    type: GET_SITE,
    site
  }
}

/**
 * Get the categories from a source of truth
 * @param {array} categories - the categories to update
 */
export function requestCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

/**
 * Trigger a state update when getting categories
 *
 * @param {array} categories
 */

export function receivedCategories (categories) {
  return {
    type: GOT_CATEGORIES,
    categories
  }
}

/**
 * Trigger a state update when you get some recent comments
 * @param {array} comments
 * @returns {object} action to pass to the reducer
 */
export function receivedComments (comments) {
  return {
    type: GOT_COMMENTS,
    comments
  }
}

