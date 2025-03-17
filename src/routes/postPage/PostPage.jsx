import React from 'react'
import './PostPage.css';
import Image from '../../components/image/Image';
import PostInteractions from '../../components/postInteractions/PostInteractions';
import { Link } from 'react-router';

const PostPage = () => {
  return (
    <div className='postPage'>
      <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className='postUser'>
            <Image path="/general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostPage