// Get the root files from the site
const GET_SITE = 'GET_SITE'

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

export { GET_SITE, getSite }
