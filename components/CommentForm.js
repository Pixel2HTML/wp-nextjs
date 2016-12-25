import {Component} from 'react'
import wp from '../wp'
import { connect } from 'react-redux'
import { requestPostComments, receivePostComments } from '../redux/actions'

const mapStoreToProps = (store) => {
  return {
    postID: store.post.data.id
  }
}

const actionCreators = {
  requestPostComments,
  receivePostComments
}

class CommentForm extends Component {
  // All of our fields displayed in the state
  state = {
    comment: '',
    name: '',
    email: '',
    website: ''
  }

  // Handlers to update the UI as we type
  commentHandler = ev => { this.setState({comment: ev.target.value}) }
  nameHandler = ev => { this.setState({name: ev.target.value}) }
  emailHandler = ev => { this.setState({email: ev.target.value}) }
  websiteHandler = ev => { this.setState({website: ev.target.value}) }

  // Handler to actually perform our submit logic
  submitHandler = (ev) => {
    ev.preventDefault()
    let { comment, name, email, website } = this.state
    let { postID, requestPostComments, receivePostComments } = this.props

    requestPostComments()

    wp.comments().create({
      author_name: name,
      author_email: email,
      author_url: website,
      content: comment,
      post: postID,
      date: new Date()
    })
    .then(res => {
      wp.comments().forPost(postID)
        .then(comments => {
          receivePostComments(comments)
          this.setState({
            comment: '',
            name: '',
            email: '',
            website: ''
          })
        })
    })
  }

  render () {
    return (
      <div id='respond' className='comment-respond'>
        <h3 id='reply-title' className='comment-reply-title'>
            Leave a Reply
          </h3>
        <form id='commentform' className='comment-form' onSubmit={this.submitHandler} >
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
              value={this.state.comment}
              onChange={this.commentHandler}
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
              value={this.state.name}
              onChange={this.nameHandler}
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
              value={this.state.email}
              onChange={this.emailHandler}
              />
          </p>
          <p className='comment-form-url'>
            <label htmlFor='url'>Website</label>
            <input
              id='url'
              type='url'
              size='30'
              maxLength='200'
              value={this.state.website}
              onChange={this.websiteHandler}
              />
          </p>
          <p className='form-submit'>
            <input
              type='submit'
              className='submit'
              value='Post Comment'
              />
          </p>
        </form>
      </div>

    )
  }
}

export default connect(mapStoreToProps, actionCreators)(CommentForm)
