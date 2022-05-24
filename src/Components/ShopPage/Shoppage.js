import React, { useState, useEffect } from 'react'
import './Shoppage.css'
import SHOP_DATA from '../shopData'
import Preview from '../Preview-Collection/Preview'

const Shoppage = () => {
    const [previews, setPreviews] = useState([])

    useEffect(() => {
      setPreviews(SHOP_DATA)
    }, [])
  return (
    <div className='shop-page'>
        {previews.map(item => <Preview key={item.id} items={item.items} title={item.title}/>)}
    </div>
  )
}

export default Shoppage