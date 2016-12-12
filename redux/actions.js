// All of our action types
const GET_SITE = 'GET_SITE'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GOT_CATEGORIES = 'GOT_CATEGORIES'
const GOT_COMMENTS = 'GOT_COMMENTS'

/**
 *  Fetch the root site info
 *  @param {object} site - the new site to update
 */

function getSite (site) {
  return {
    type: GET_SITE,
    site
  }
}

/**
 * Get the categories from a source of truth
 * @param {array} categories - the categories to update
 */
function requestCategories (categories) {
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

function receivedCategories (categories) {
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

function receivedComments (comments) {
  return {
    type: GOT_COMMENTS,
    comments
  }
}

export {
  GET_SITE,
  getSite,
  GET_CATEGORIES,
  requestCategories,
  GOT_CATEGORIES,
  receivedCategories,
  GOT_COMMENTS,
  receivedComments
}
