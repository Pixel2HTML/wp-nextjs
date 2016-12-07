'use strict'

import React from 'react'
import Fetch from 'isomorphic-fetch'

import config from '../config'

class CategoriesWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  async componentDidMount () {
    let res = await Fetch(config.endpoint+'/wp/v2/categories')
    let categories = await res.json()
    this.setState({categories})
  }

  render () {
    return (
      <section id='categories-2' className='widget widget_categories'>
        <h2 className='widget-title'>Categories</h2>
        <ul>
          {this.state.categories.map(category => (
            <li key={category.id} className={`cat-item cat-item-${category.id}`}>
              <a href={category.link}>{category.name}</a>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default CategoriesWidget
