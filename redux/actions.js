// All of our ty
const GET_SITE = 'GET_SITE'
const GET_CATEGORIES = 'GET_CATEGORIES'

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
function getCategories (categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export { GET_SITE, getSite, GET_CATEGORIES, getCategories }
