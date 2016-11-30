import React from 'react'
import Link from 'next/link'

export default ({ id, title, link, excerpt }) => (
  <div className='wrap'>
    <h1>
      <Link href={`/post/${id}`}>{ title }</Link>
    </h1>
    <div dangerouslySetInnerHTML={{__html: excerpt}} />
  </div>
)
