import React from 'react'
import { Link } from 'react-router-dom'
import './MenuItemStyles.css'

const MenuItem = ({ img, title, size, linkUrl}) => {
  return (
    <div className={`menu-item ${size}`}>
      <div style={{ backgroundImage: `url(${img})`}} className='background-image' />
        
          <div className='content'>
              <h1 className='title'>{title.toUpperCase()}</h1>  
              <span className='subtitle'><Link to={`${linkUrl}`}>SHOP NOW</Link></span>
          </div>
    </div>
    
  )
}

export default MenuItem