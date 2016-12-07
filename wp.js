'use strict'

import WPAPI from 'wpapi'
import config from './config'

const wp = new WPAPI({
  endpoint: config.endpoint,
  username: config.user,
  password: config.pw
})

const Site = WPAPI.site(config.endpoint)

export { Site }

export default wp
