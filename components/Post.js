import React from 'react'
import Link from 'next/link'

export default ({ id, title, link, excerpt }) => (
  <div>
    <h1>
      <Link href={link}>{title}</Link>
    </h1>
    <div dangerouslySetInnerHTML={{__html: excerpt}}></div>
  </div>
)
