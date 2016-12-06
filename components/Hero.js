import React from 'react'
import ScrollDown from './ScrollDown'

export default class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.shouldScroll = this.shouldScroll.bind(this)
  }

  shouldScroll () {
    let scroll = this.props.frontPage
    if (scroll) {
      return (<ScrollDown />)
    }
  }

  render () {
    let header = 'o-header'
    if (this.props.hasimage) header += ' has-header-image'
    if (this.props.frontPage) header += ' home twentyseventeen-front-page'
    return (
      <div className={header}>
        <header id='masthead' className='site-header' role='banner'>
          <div className='custom-header'>
            <div className='custom-header-image'>
              <div id='wp-custom-header' className='wp-custom-header'>
                <img
                  src='/static/header.jpg'
                  alt='Project react~nextjs' />
              </div>
            </div>
            <div className='site-branding'>
              <div className='wrap'>
                <div className='site-branding-text'>
                  <h1 className='site-title'><a href='/' rel='home'>{this.props.title}</a></h1>
                  <p className='site-description'>{this.props.description}</p>
                </div>
                {this.shouldScroll()}
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
