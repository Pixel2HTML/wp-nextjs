import { Component } from 'react'
import CommentsWidget from './CommentsWidget'

class CommentsWidgetContainer extends Component {
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

