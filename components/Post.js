import React from 'react'
import Link from 'next/link'
const moment = require('moment')

export default class Post extends React.Component {

  render () {
    let now = moment(this.props.time).format('MMMM d, YYYY')
    return (
      <article id={this.props.id} className='post'>
        <header className='entry-header'>
          <div className='entry-meta'>
            <span className='screen-reader-text'>Posted on</span>
            <a rel='bookmark'><time className='entry-date'>{now}</time></a>
          </div>
          <h2 className='entry-title'>
            <Link href={`/post?id=${this.props.id}`} rel='bookmark'>{this.props.title}</Link>
          </h2>
        </header>
        <div dangerouslySetInnerHTML={{__html: this.props.excerpt}} />
      </article>
    )
  }
}

