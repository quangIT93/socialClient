import React from "react";

// import component
import LeftPost from "./LeftPost/LeftPost";
import RightPost from "./RightPost/RightPost";

import "./posts.scss";

const ProfilePost = () => {
  return (
    <div className="profile-post">
      <LeftPost />
      <RightPost />
    </div>
  );
};

export default ProfilePost;
