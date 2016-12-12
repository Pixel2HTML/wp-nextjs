import React from 'react'
import CategoriesWidget from './CategoriesWidget'

class CategoriesWidgetContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }

  render () {
    return (
      <CategoriesWidget />
    )
  }
}

export default CategoriesWidgetContainer
