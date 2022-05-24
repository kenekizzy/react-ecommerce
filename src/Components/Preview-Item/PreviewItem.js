import React from 'react'
import './PreviewItemStyle.css'

const PreviewItem = ({name, img, price}) => {
  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{
          backgroundImage: `url(${img})`
        }} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
  )
}

export default PreviewItem