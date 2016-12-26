import { Component } from 'react'
import Search from './Search'

export default class SearchWidget extends Component {
  render () {
    return (
      <section id='search-2' className='widget widget_search'>
        <Search />
      </section>
    )
  }
}
