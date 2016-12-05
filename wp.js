'use strict'

import WPAPI from 'wpapi'
import config from './config'

const wp = new WPAPI({ endpoint: config.endpoint })

export default wp
