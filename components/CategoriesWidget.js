'use strict'

import React from 'react'
import wp from '../wp'
import Spinner from './Spinner'

class CategoriesWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
    this.renderCategories = this.renderCategories.bind(this)
  }

  async componentDidMount () {
    let categories = await wp.categories()
    this.setState({categories})
  }

  renderCategories (categories) {
    return categories.map(category => (
      <li key={category.id} className={`cat-item cat-item-${category.id}`}>
        <a href={category.link}>{category.name}</a>
      </li>
    ))
  }

  render () {
    let categories = this.state.categories
    return (
      <section id='categories-2' className='widget widget_categories'>
        <h2 className='widget-title'>Categories</h2>
        <ul>
          {categories.length ? this.renderCategories(categories) : <Spinner />}
        </ul>
      </section>
    )
  }
}

export default CategoriesWidget
