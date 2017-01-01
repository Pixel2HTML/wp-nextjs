'use strict'

import WPAPI from 'wpapi'
import config from './config'

const wp = new WPAPI({
  endpoint: config.endpoint
})

const Site = WPAPI.site(config.endpoint)

export { Site }

export default wp
