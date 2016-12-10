import React from 'react'
import CommentsWidget from './CommentsWidget'

class CommentsWidgetContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    return (
      <CommentsWidget />
    )
  }
}

export default CommentsWidgetContainer

