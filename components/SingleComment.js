import {Component} from 'react'
const moment = require('moment')

export default class SingleComment extends Component {
  render () {
    const {avatarUrl, authorUrl, authorName, date, content} = this.props
    let time = moment(date).format('MMMM DD YYYY, h:mm a')
    return (
      <li className='comment'>
        <article className='comment-body'>
          <footer className='comment-meta'>
            <div className='comment-author vcard'>
              <img alt={authorName} src={avatarUrl}
                className='avatar avatar-100 photo'
                width='100'
                height='100'
                  />
              <b className='fn'>
                <a href={authorUrl} className='url'>{authorName}</a>
              </b>
              <span className='says'>says:</span>
            </div>
            <div className='comment-metadata'>
              <a href='#'>
                <time>{time}</time>
              </a>
            </div>
          </footer>
          <div className='comment-content' dangerouslySetInnerHTML={{__html: content}} />
        </article>
      </li>
    )
  }
}
