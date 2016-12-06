'use strict'

import React from 'react'
import Fetch from 'isomorphic-fetch'
import Spinner from './Spinner'
const baseURL = 'http://wp.pixel2html.com/examples/nextjs/wp-json/wp/v2/'

class PostFooter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      tags: []
    }
    this.fetchFromAPI = this.fetchFromAPI.bind(this)
    this.fetchCategory = this.fetchCategory.bind(this)
    this.renderCategories = this.renderCategories.bind(this)
    this.fetchTag = this.fetchTag.bind(this)
  }

  async fetchFromAPI (path) {
    let response = await Fetch(baseURL + path)
    return response.json()
  }

  async fetchCategory (categoryId) {
    return await this.fetchFromAPI('categories/' + categoryId)
  }

  async fetchTag (tagId) {
    return await this.fetchFromAPI('tags/' + tagId)
  }

  async componentDidMount () {
    let categories = this.props.post.categories
    Promise.all(categories.map(this.fetchCategory))
      .then(categories => {
        if (categories.length > 0) {
          this.setState({categories})
        } else {
          this.setState({categories: [{id: 8888, link: '#', name: 'Uncategorized'}]})
        }
      })

    let tags = this.props.post.tags
    Promise.all(tags.map(this.fetchTag))
      .then(tags => {
        if (tags.length > 0) {
          this.setState({tags})
        } else {
          this.setState({tags: [{id: 99999, link: '#', name: 'Untagged'}]})
        }
      })
  }

  renderCategories (categories) {
    return categories.map(category => (
      <a key={category.id} href={category.link}>{category.name} </a>
    ))
  }

  render () {
    let categories = this.state.categories
    let tags = this.state.tags
    return (
      <footer className='entry-footer'>
        <span className='cat-tags-links'>
          <span className='cat-links'>
            <svg viewBox='0 0 34 32' className='icon icon-folder-open' ariaHidden='true' role='img' version='1.1' xmlns='http://www.w3.org/2000/svg'>
              <path d='M33.554 17q0 0.554-0.554 1.179l-6 7.071q-0.768 0.911-2.152 1.545t-2.563 0.634h-19.429q-0.607 0-1.080-0.232t-0.473-0.768q0-0.554 0.554-1.179l6-7.071q0.768-0.911 2.152-1.545t2.563-0.634h19.429q0.607 0 1.080 0.232t0.473 0.768zM27.429 10.857v2.857h-14.857q-1.679 0-3.518 0.848t-2.929 2.134l-6.107 7.179q0-0.071-0.009-0.223t-0.009-0.223v-17.143q0-1.643 1.179-2.821t2.821-1.179h5.714q1.643 0 2.821 1.179t1.179 2.821v0.571h9.714q1.643 0 2.821 1.179t1.179 2.821z' />
            </svg>
            <span className='screen-reader-text'>Categories</span>
            {categories.length ? this.renderCategories(categories) : <Spinner />}
          </span>
          <span className='tags-links'>
            <svg viewBox='0 0 32 32' className='icon icon-hashtag' ariaHidden='true' role='img' version='1.1' xmls='http://www.w3.org/2000/svg'>
              <path d='M17.696 18.286l1.143-4.571h-4.536l-1.143 4.571h4.536zM31.411 9.286l-1 4q-0.125 0.429-0.554 0.429h-5.839l-1.143 4.571h5.554q0.268 0 0.446 0.214 0.179 0.25 0.107 0.5l-1 4q-0.089 0.429-0.554 0.429h-5.839l-1.446 5.857q-0.125 0.429-0.554 0.429h-4q-0.286 0-0.464-0.214-0.161-0.214-0.107-0.5l1.393-5.571h-4.536l-1.446 5.857q-0.125 0.429-0.554 0.429h-4.018q-0.268 0-0.446-0.214-0.161-0.214-0.107-0.5l1.393-5.571h-5.554q-0.268 0-0.446-0.214-0.161-0.214-0.107-0.5l1-4q0.125-0.429 0.554-0.429h5.839l1.143-4.571h-5.554q-0.268 0-0.446-0.214-0.179-0.25-0.107-0.5l1-4q0.089-0.429 0.554-0.429h5.839l1.446-5.857q0.125-0.429 0.571-0.429h4q0.268 0 0.446 0.214 0.161 0.214 0.107 0.5l-1.393 5.571h4.536l1.446-5.857q0.125-0.429 0.571-0.429h4q0.268 0 0.446 0.214 0.161 0.214 0.107 0.5l-1.393 5.571h5.554q0.268 0 0.446 0.214 0.161 0.214 0.107 0.5z' />
            </svg>
            <span className='screen-reader-text'>Tags</span>
            {tags.length ? this.renderCategories(tags) : <Spinner />}
          </span>
        </span>
      </footer>
    )
  }
}

export default PostFooter
