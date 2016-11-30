import React from 'react'

export default class Hero extends React.Component {

  render () {
    // Header class constructor
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
                  <h1 className='site-title'><a href='/' rel='home'>Project react~nextjs</a></h1>
                  <p className='site-description'>
                    Just another Pixel2HTML site
                  </p>
                </div>
                <a href='#content' className='menu-scroll-down'>
                  <svg
                    className='icon icon-arrow-right'
                    aria-hidden='true'
                    role='img'
                    viewBox='0 0 43 32'>
                    <path d='M0.356 17.956c0.178 0.178 0.533 0.356 0.711 0.356h33.778l-10.311 10.489c-0.178 0.178-0.356 0.533-0.356 0.711 0 0.356 0.178 0.533 0.356 0.711l1.6 1.6c0.178 0.178 0.533 0.356 0.711 0.356s0.533-0.178 0.711-0.356l14.756-14.933c0.178-0.356 0.356-0.711 0.356-0.889s-0.178-0.533-0.356-0.711l-14.756-14.933c0-0.178-0.356-0.356-0.533-0.356s-0.533 0.178-0.711 0.356l-1.6 1.6c-0.178 0.178-0.356 0.533-0.356 0.711s0.178 0.533 0.356 0.711l10.311 10.489h-33.778c-0.178 0-0.533 0.178-0.711 0.356-0.356 0.178-0.533 0.356-0.533 0.711v2.311c0 0.178 0.178 0.533 0.356 0.711z' />
                  </svg>
                  <span className='screen-reader-text'>Scroll Down</span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
