import React from 'react'
import Link from 'next/link'

export default ({ id, title, link, excerpt }) => (
  <article id={id} className='post'>
    <h1>
      <Link href={`/post?id=${id}`}>{ title }</Link>
    </h1>
    <div dangerouslySetInnerHTML={{__html: excerpt}} />
  </article>
)
