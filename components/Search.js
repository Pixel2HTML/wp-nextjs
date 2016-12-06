import React from 'react'
import config from '../config'
// const baseSearch = 'http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/posts?search='

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {search: ''}
    this.searchHandler = this.searchHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler (event) {
    let query = config.endpoint + '/wp/v2/posts?search=' + encodeURIComponent(this.state.search)
    console.log(query)
    event.preventDefault()
  }

  searchHandler (event) {
    this.setState({search: event.target.value})
  }

  render () {
    return (
      <section id='search-2' className='widget widget_search'>
        <form role='search' className='search-form' onSubmit={this.submitHandler}>
          <label htmlFor='search-form-5841a9161283e'>
            <span className='screen-reader-text'>Search for:</span>
          </label>
          <input type='search' className='search-field' placeholder='Search …' value={this.state.search} onChange={this.searchHandler} />
          <button type='submit' className='search-submit'>
            <svg className='icon icon-search' aria-hidden='true' role='img' viewBox='0 0 30 32'>
              <path className='path1' d='M20.571 14.857q0-3.304-2.348-5.652t-5.652-2.348-5.652 2.348-2.348 5.652 2.348 5.652 5.652 2.348 5.652-2.348 2.348-5.652zM29.714 29.714q0 0.929-0.679 1.607t-1.607 0.679q-0.964 0-1.607-0.679l-6.125-6.107q-3.196 2.214-7.125 2.214-2.554 0-4.884-0.991t-4.018-2.679-2.679-4.018-0.991-4.884 0.991-4.884 2.679-4.018 4.018-2.679 4.884-0.991 4.884 0.991 4.018 2.679 2.679 4.018 0.991 4.884q0 3.929-2.214 7.125l6.125 6.125q0.661 0.661 0.661 1.607z' />
            </svg>
            <span className='screen-reader-text'>Search</span>
          </button>
        </form>
      </section>
    )
  }
}

export default Search
