import React from "react";

import "./video.scss";

const ProfileVideo = () => {
  return (
    <div className="profile-post__video">
      <div className="wrap-introduce wrap-introduce__items">
        <div className="title-introduce__video">
          <h2>Video</h2>
          <div className="search-introduce__video">
            <div className="invite-add__video add-video">Thêm video</div>

            <div className="edit-video__introduce add-video">
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="items-filter__video">
          <div className="item-filter active">Video của bạn</div>
          <div className="item-filter">Album</div>
        </div>
        <div className="list-video__introduce">
          <div className="list-video">
            <div className="wrap-item__video">
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
            </div>
          </div>
          <div className="see-all__video">Xem tất cả</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVideo;
