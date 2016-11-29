import React from 'react'
import Head from 'next/head'

export default ({title}) => (
  <Head>
    <title>{title}</title>
    <link href='/static/twentyseventeen.css' rel='stylesheet' />
    <link href='/static/twentyNext.css' rel='stylesheet' />
  </Head>
)
