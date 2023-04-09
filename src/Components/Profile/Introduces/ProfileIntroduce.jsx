import React from "react";
import "./ProfileIntroduce.scss";

import Introduce from "./Introduce/Introduce";
import FriendIntroduce from "./FriendIntroduce/FriendIntroduce";
import ImageIntroduce from "./ImageIntroduce/ImageIntroduce";
import VideoIntroduce from "./VideoIntroduce/VideoIntroduce";
import CheckInIntroduce from "./CheckInIntroduce/CheckInIntroduce";
const ProfileIntroduce = () => {
  return (
    <div className="profile-post__introduce">
      <div className="wrap-introduce wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-friend wrap-introduce__items">
        <FriendIntroduce />
      </div>
      <div className="wrap-image wrap-introduce__items">
        <ImageIntroduce />
      </div>
      <div className="wrap-video wrap-introduce__items">
        <VideoIntroduce />
      </div>
      <div className="wrap-sport wrap-introduce__items">
        <CheckInIntroduce />
      </div>
      <div className="wrap-music wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-film wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-tv wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-tv wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-book wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-game wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-like wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-event wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-question wrap-introduce__items">
        <Introduce />
      </div>
      <div className="wrap-group wrap-introduce__items">
        <Introduce />
      </div>
    </div>
  );
};

export default ProfileIntroduce;
