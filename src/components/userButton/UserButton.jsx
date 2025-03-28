import React from 'react'
import './UserButton.css';
import { useState } from 'react';
import Image from '../image/Image';

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // temp
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <img src="/general/arrow.svg" alt="" className="arrow" onClick={() => setOpen((prev) => !prev)} />

      {/* <div onClick={() => setOpen((prev) => !prev)}>
        <Image
          path="/general/arrow.svg"
          alt=""
          className="arrow"
        />
      </div> */}
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
}

export default UserButton;