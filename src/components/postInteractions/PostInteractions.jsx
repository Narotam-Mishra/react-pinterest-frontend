import React from 'react'
import './PostInteractions.css';
import Image from '../image/Image';

const PostInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="" />
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteractions