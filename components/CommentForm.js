import {Component} from 'react'

export default class CommentForm extends Component {
  render () {
    return (
      <div id='respond' className='comment-respond'>
        <h3 id='reply-title' className='comment-reply-title'>
            Leave a Reply
          </h3>
        <form id='commentform' className='comment-form' noValidate >
          <p className='comment-notes'>
            <span id='email-notes'>
                Your email address will not be published.
              </span> Required fields are marked <span className='required'>*</span>
          </p>
          <p className='comment-form-comment'>
            <label htmlFor='comment'>Comment</label>
            <textarea
              id='comment'
              cols='45'
              rows='8'
              maxLength='65525'
              aria-required='true'
              required='required'
              />
          </p>
          <p className='comment-form-author'>
            <label htmlFor='author'>
                Name <span className='required'>*</span>
            </label>
            <input
              id='author'
              type='text'
              size='30'
              maxLength='245'
              aria-required='true'
              required='required'
              />
          </p>
          <p className='comment-form-email'>
            <label htmlFor='email'>
                Email <span className='required'>*</span>
            </label>
            <input
              id='email'
              type='email'
              size='30'
              maxLength='100'
              aria-describedby='email-notes'
              aria-required='true'
              required='required'
              />
          </p>
          <p className='comment-form-url'>
            <label htmlFor='url'>Website</label>
            <input
              id='url'
              type='url'
              size='30'
              maxLength='200'
              />
          </p>
          <p className='form-submit'>
            <input
              type='submit'
              className='submit'
              value='PostComment'
              />
          </p>
        </form>
      </div>

    )
  }
}
