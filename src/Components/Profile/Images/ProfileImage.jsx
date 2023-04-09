import React from "react";

import "./image.scss";

const ProfileImage = () => {
  return (
    <div className="profile-post__image">
      <div className="wrap-introduce wrap-introduce__items">
        <div className="title-introduce__image">
          <h2>Ảnh</h2>
          <div className="search-introduce__image">
            <div className="invite-add__image add-image">Thêm ảnh</div>

            <div className="edit-image__introduce add-image">
              <span>...</span>
            </div>
          </div>
        </div>
        <div className="items-filter__image">
          <div className="item-filter active">Ảnh của bạn</div>
          <div className="item-filter">Ảnh có mặt bạn</div>
          <div className="item-filter">Album</div>
        </div>
        <div className="list-image__introduce">
          <div className="list-image">
            <div className="wrap-item__image">
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
              <img src="../assets/avatar1.jpg" alt="" />
            </div>
          </div>
          <div className="see-all__image">Xem tất cả</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
