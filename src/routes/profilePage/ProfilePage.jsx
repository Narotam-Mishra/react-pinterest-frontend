import { useState } from 'react'
import './ProfilePage.css';
import Image from '../../components/image/Image';
import Gallery from '../../components/gallery/Gallery';
import apiRequest from '../../utils/apiRequest';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import Boards from '../../components/boards/Boards';
import FollowButton from './FollowButton';

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  if (!data) {
    return "User not found!";
  }

  // console.log("UserData:", data);
  
  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        path={data.img || "/general/noAvatar.png"}
        w={100}
        h={100}
        alt=""
      />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="followCounts">{data.followerCount} followers . {data.followingCount} followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <FollowButton isFollowing={data.isFollowing} username={data.username} />
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span onClick={() => setType("created")} className={type === "created" ? "active" : ""}>Saved</span>
        <span onClick={() => setType("saved")} className={type === "saved" ? "active" : ""}>Created</span>
      </div>
      {
        type === "created" ? <Gallery userId={data._id} /> : <Boards userId={data._id} />
      }
    </div>
  );
}

export default ProfilePage;