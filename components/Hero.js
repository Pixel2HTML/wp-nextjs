import React from 'react'
import style from 'next/css'

// Top to bottom
const wrap = style({
  position: 'relative'
})

const header = style({
  backgroundColor: '#fafafa',
  position: 'relative'
})

const branding = style({
  padding: '1em 0',
  position: 'relative',
  transition: 'margin-bottom 0.2s',
  'z-index': '3'
})

const brandLink = style({
  'text-decoration': 'none',
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: '0.7'
  },
  ':focus': {
    opacity: '0.7'
  }
})

export default () => (
  <header className={header} role='banner'>
    <div className='custom-header'>
      <div className='custom-header-image'>
        <div id='wp-custom-header' className='wp-custom-header'>
          <img
            src='/static/header.jpg'
            width='2000'
            height='1200'
            alt='Project react~nextjs' />
        </div>
      </div>
      <div className={branding}>
        <div className={wrap}>
          <div className='site-branding-text'>
            <h1 className='site-title'><a className={brandLink} href='http://wp.pixel2html.com/examples/nextjs/' rel='home'>Project react~nextjs</a></h1>
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
              <path d='M0.356 17.956c0.178 0.178 0.533 0.356 0.711 0.356h33.778l-10.311 10.489c-0.178 0.178-0.356 0.533-0.356 0.711 0 0.356 0.178 0.533 0.356 0.711l1.6 1.6c0.178 0.178 0.533 0.356 0.711 0.356s0.533-0.178 0.711-0.356l14.756-14.933c0.178-0.356 0.356-0.711 0.356-0.889s-0.178-0.533-0.356-0.711l-14.756-14.933c0-0.178-0.356-0.356-0.533-0.356s-0.533 0.178-0.711 0.356l-1.6 1.6c-0.178 0.178-0.356 0.533-0.356 0.711s0.178 0.533 0.356 0.711l10.311 10.489h-33.778c-0.178 0-0.533 0.178-0.711 0.356-0.356 0.178-0.533 0.356-0.533 0.711v2.311c0 0.178 0.178 0.533 0.356 0.711z'></path>
            </svg> <span className='screen-reader-text'>Scroll Down</span></a>
        </div>
      </div>
    </div>
  </header>
)
