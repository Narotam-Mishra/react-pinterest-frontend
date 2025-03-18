import React from 'react'
import './Comments.css';
import Image from '../image/Image';

const Comments = () => {
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        {/* COMMENT */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
      </div>

      {/* comment input form */}
      <form className='commentForm'>
        <input type="text" placeholder='Add a comment' />
        <div className="emoji">
          <div>😊</div>
        </div>
      </form>
    </div>
  );
}

export default Comments