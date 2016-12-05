'use strict'

import WPAPI from 'wpapi'
import config from './config'

const wp = new WPAPI({
  endpoint: config.endpoint,
  username: config.user,
  password: config.pw
})

export default wp
