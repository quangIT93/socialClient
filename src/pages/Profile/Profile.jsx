import "./profile.scss";
import { Outlet } from "react-router-dom";

import { useState } from "react";

import ProfileInfoUser from "../../Components/Profile/ProfileInfoUser/ProfileInfoUser";
const Profile = () => {
  const [showMore, setShowMore] = useState("");

  const closeMore = () => {
    if (showMore) return setShowMore("");
  };

  return (
    <div className="profile" onClick={closeMore}>
      {/* ảnh cover */}
      <ProfileInfoUser showMore={showMore} setShowMore={setShowMore} />
      <Outlet />
    </div>
  );
};

export default Profile;
