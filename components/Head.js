import React from 'react'
import Head from 'next/head'

export default ({title}) => (
  <Head>
    <title>{title}</title>
    <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Libre+Franklin%3A300%2C300i%2C400%2C400i%2C600%2C600i%2C800%2C800i&amp;subset=latin%2Clatin-ext' type='text/css' media='all' />
    <link href='/static/twentyseventeen.css' rel='stylesheet' />
    <link href='/static/twentyNext.css' rel='stylesheet' />
  </Head>
)
