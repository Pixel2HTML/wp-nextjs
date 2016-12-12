import React from 'react'
import CategoriesWidget from './CategoriesWidget'
import Spinner from './Spinner'
import wp from '../wp'

import { connect } from 'react-redux'
import { receivedCategories } from '../redux/actions'

function mapStateToProps (store) {
  return {
    isFetching: store.categories.isFetching,
    categories: store.categories.items
  }
}

const dispatchToProps = { receivedCategories }

class CategoriesWidgetContainer extends React.Component {

  async componentDidMount () {
    const {receivedCategories} = this.props
    let categories = await wp.categories()
    receivedCategories(categories)
  }

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

export default connect(mapStateToProps, dispatchToProps)(CategoriesWidgetContainer)
