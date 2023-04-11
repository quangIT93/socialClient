import "./profile.scss";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useState, useEffect, useCallback } from "react";

import ProfileInfoUser from "../../Components/Profile/ProfileInfoUser/ProfileInfoUser";

const Profile = () => {
  const [showMore, setShowMore] = useState("");

  const closeMore = () => {
    if (showMore) return setShowMore("");
  };

  const changePage = useNavigate();
  const pathname = useLocation().pathname;

  const handlePageChange = useCallback(() => {
    if (pathname === "/profile") {
      changePage("/profile/posts");
    }
  }, [pathname, changePage]);

  useEffect(() => {
    handlePageChange();
  }, [handlePageChange]);

  return (
    <div className="profile" onClick={closeMore}>
      {/* ảnh cover */}
      <ProfileInfoUser
        showMore={showMore}
        setShowMore={setShowMore}
        pathname={pathname}
      />
      <Outlet />
    </div>
  );
};

export default Profile;
