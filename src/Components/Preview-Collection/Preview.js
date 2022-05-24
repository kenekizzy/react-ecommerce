import React from 'react'
import PreviewItem from '../Preview-Item/PreviewItem'
import './PreviewStyle.css'

const Preview = ({ title, items}) => {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4)
            .map((item) => <PreviewItem key={item.id} name={item.name} img={item.imageUrl} price={item.price}/>
            )}
        </div>
    </div>
  )
}

export default Preview