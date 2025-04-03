import './UserButton.css';
import { useState } from 'react';
import Image from '../image/Image';
import apiRequest from '../../utils/apiRequest';
import { Link, useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // temp
  // const currentUser = true;

  const { currentUser, removeCurrentUser } = useAuthStore();
  // console.log("Current User:", currentUser);
  
  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser(); 
      navigate("/auth");
    } catch (error) {
      console.log("Something went wrong while logout:", error);
    }
  }

  return currentUser ? (
    <div className="userButton">
      <Image path={currentUser.img || "/general/noAvatar.png"} alt="" />
      <img src="/general/arrow.svg" alt="" className="arrow" onClick={() => setOpen((prev) => !prev)} />

      {/* <div onClick={() => setOpen((prev) => !prev)} className='arrowWrapper'>
        <Image
          path="/general/arrow.svg"
          alt=""
          className="arrow"
        />
      </div> */}
      {open && (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
          <div className="userOption">Settings</div>
          <div className="userOption" onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / Sign Up
    </Link>
  );
}

export default UserButton;