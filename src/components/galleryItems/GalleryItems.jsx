import React from 'react'
import './GalleryItems.css';

const GalleryItems = ({ item }) => {
  return (
    <div className='galleryItem'>
        <img src={item.media} alt="" />
    </div>
  )
}

export default GalleryItems