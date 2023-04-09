import React from "react";

import "./friendIntroduce.scss";

const FriendIntroduce = () => {
  return (
    <>
      <div className="title-introduce__friend">
        <h2>Bạn bè</h2>
        <div className="search-introduce__friend">
          <div className="invite-add__friend add-friend">Lời mời kết bạn</div>
          <div className="search-add__friend add-friend">Tìm bạn bè</div>
          <div className="edit-friend__introduce add-friend">
            <span>...</span>
          </div>
        </div>
      </div>

      <div className="items-filter__friend">
        <div className="item-filter active">Tất cả bạn bè</div>
        <div className="item-filter">Sinh nhật</div>
        <div className="item-filter">Tỉnh/Thành Phố hiện tại</div>
        <div className="item-filter">Quê quán</div>
        <div className="item-filter">Đang theo dõi</div>
      </div>

      <div className="list-friend__introduce">
        <div className="list-friend">
          <div className="wrap-item__friend">
            <div className="item-friend">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="info-friend">
                <h2>Tên bạn bè</h2>
                <div
                  className="mutual-friends
"
                >
                  20 bạn chung
                </div>
              </div>
            </div>
            <div className="icon-item__friend">...</div>
          </div>
          <div className="wrap-item__friend">
            <div className="item-friend">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="info-friend">
                <h2>Tên bạn bè</h2>
                <div
                  className="mutual-friends
"
                >
                  20 bạn chung
                </div>
              </div>
            </div>
            <div className="icon-item__friend">...</div>
          </div>
          <div className="wrap-item__friend">
            <div className="item-friend">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="info-friend">
                <h2>Tên bạn bè</h2>
                <div
                  className="mutual-friends
"
                >
                  20 bạn chung
                </div>
              </div>
            </div>
            <div className="icon-item__friend">...</div>
          </div>
        </div>
        <div className="see-all__friend">xem tất cả</div>
      </div>
    </>
  );
};

export default FriendIntroduce;