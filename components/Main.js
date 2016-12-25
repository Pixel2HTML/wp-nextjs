import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.renderHeader = this.renderHeader.bind(this)
  }

  renderHeader () {
    let shouldHaveHeader = this.props.hasHeader
    if (shouldHaveHeader) {
      return (
        <header className='page-header'>
          <h2 className='page-title'>{this.props.headerTitle}</h2>
        </header>
      )
    }
  }

  render () {
    let siteContent = 'site-content-contain'
    if (this.props.hasSidebar) siteContent += ' has-sidebar'

    return (
      <div className={siteContent}>
        <div className='site-content' id='content'>
          <div className='wrap'>
            {this.renderHeader()}
            <div id='primary' className='content-area'>
              {this.props.children}
            </div>
            <aside id='secondary' className='widget-area' role='complementary'>
              <Sidebar />
            </aside>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
