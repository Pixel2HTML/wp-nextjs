import { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <footer id='colophon' className='site-footer'>
        <div className='wrap'>
          <div className='site-info'>
            <a href='https://wordpress.org/' target='_blank'>Proudly powered by Wordpress</a>
          </div>
        </div>
      </footer>
    )
  }
}
