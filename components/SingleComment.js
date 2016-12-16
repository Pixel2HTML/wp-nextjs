import {Component} from 'react'

export default class SingleComment extends Component {
  render () {
    return (
      <li className='comment'>
        <article className='comment-body'>
          <footer className='comment-meta'>
            <div className='comment-author vcard'>
              <img alt src='http://0.gravatar.com/avatar/620490f18de567c27029c714a3692fab?s=100&d=mm&r=g'
                srcSet='http://0.gravatar.com/avatar/620490f18de567c27029c714a3692fab?s=200&d=mm&r=g 2x'
                className='avatar avatar-100 photo'
                width='100'
                height='100'
                  />
              <b className='fn'>
                <a href='#' className='url'>Miss Jazmyne Orn Sr.</a>
              </b>
              <span className='says'>says:</span>
            </div>
            <div className='comment-metadata'>
              <a href='#'>
                <time>November 23, 2016 at 5:56 pm</time>
              </a>
            </div>
          </footer>
          <div className='comment-content'>
            <p>Lorem ipsum dolor sit amet blah blah blah</p>
          </div>
        </article>
      </li>
    )
  }
}
