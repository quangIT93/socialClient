import React from "react";

import "./introduce.scss";

const Introduce = () => {
  return (
    <>
      <div className="introduce-item__left">
        <h2>Giới thiệu</h2>
        <div className="items-introduce">
          <div className="item-introduce active">Tổng quan</div>
          <div className="item-introduce">Công việc và học vấn</div>
          <div className="item-introduce">Nơi từng sống</div>
          <div className="item-introduce">Thông tin liên hệ và cơ bản</div>
          <div className="item-introduce">Gia đình và các mối liên hệ</div>
          <div className="item-introduce">Sự kiện trong đời</div>
        </div>
      </div>
      <div className="introduce-item__right">
        <h2>Chi tiết</h2>
        <div className="items-introduce">
          <div className="item-introduce add-item__introduce">
            Thêm nơi làm việc
          </div>
          <div className="item-introduce">
            Đã học tại trường: <span>THPT Lý Thường Kiệt</span>
          </div>
          <div className="item-introduce">
            Sống Tại: <span>Thành Phố Hồ Chí Minh</span>
          </div>
          <div className="item-introduce">
            Đến từ: <span>Thành Phố Hồ Chí Minh</span>
          </div>
          <div className="item-introduce">
            <span>Độc thân</span>
          </div>
          <div className="item-introduce">
            Số điện thoại: <span>0911878031</span>
          </div>
          <div className="item-introduce">
            Sinh nhật: <span>cách đây 3 ngày</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
