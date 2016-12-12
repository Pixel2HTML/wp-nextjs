import React from 'react'
import CategoriesWidget from './CategoriesWidget'
import Spinner from './Spinner'
import wp from '../wp'

import { connect } from 'react-redux'
import { receivedCategories } from '../redux/actions'

async function mapStateToProps (state) {
  let categories = await wp.categories()
  state.dispatch(receivedCategories(categories))
  return {
    isFetching: state.categories.isFetching,
    categories: state.categories.items
  }
}

class CategoriesWidgetContainer extends React.Component {
  render () {
    let {categories, isFetching} = this.props
    if (!isFetching) {
      return (
        <CategoriesWidget categories={categories} />
      )
    } else {
      return (
        <Spinner />
      )
    }
  }
}

export default connect(mapStateToProps)(CategoriesWidgetContainer)
