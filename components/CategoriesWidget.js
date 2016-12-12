import React from 'react'

class CategoriesWidget extends React.Component {
  render () {
    let { categories } = this.props
    return (
      <section id='categories-2' className='widget widget_categories'>
        <h2 className='widget-title'>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id} className={`cat-item cat-item-${category.id}`}>
              <a href={category.link}>{category.name}</a>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default CategoriesWidget
