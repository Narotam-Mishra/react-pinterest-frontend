import React from 'react'
import './GalleryItems.css';
import { Link } from 'react-router'
import Image from '../image/Image';

const GalleryItems = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="" /> */}
      <Image src={item.media} alt="" w={372} h={optimizedHeight} />
      
      <Link to={`/pin/${item._id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="share_icon" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="share_icon" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItems