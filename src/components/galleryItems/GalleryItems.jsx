import React from 'react'
import './GalleryItems.css';
import { Link } from 'react-router'
import { IKImage } from 'imagekitio-react';

const GalleryItems = ({ item }) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt="" /> */}
      <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
        path={item.media}
        transformation={[
          {
            width: 372,
          },
        ]}
        alt='test'
        loading='lazy'
        lqip={{ active: true, quality: 20 }}
      />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="share_icon" />
        </button>
        <button>
          <img src="/general/more.svg" alt="share_icon" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItems