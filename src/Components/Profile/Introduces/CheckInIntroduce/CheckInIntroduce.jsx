import React from "react";

import "./checkInIntroduce.scss";

const CheckInIntroduce = () => {
  return (
    <>
      <div className="title-introduce__checkIn">
        <h2>Check in</h2>
        <div className="search-introduce__checkIn">
          <div className="invite-add__checkIn add-checkIn">
            Thêm địa điểm check in
          </div>
          <div className="search-add__checkIn add-checkIn">
            Tìm kiếm địa điểm check in
          </div>
          <div className="edit-checkIn__introduce add-checkIn">
            <span>...</span>
          </div>
        </div>
      </div>

      <div className="items-filter__checkIn">
        <div className="item-filter active">Điểm check in của bạn</div>
        <div className="item-filter">Gần đây</div>
      </div>

      <div className="list-checkIn__introduce">
        <div className="list-checkIn">
          <div className="wrap-item__checkIn">
            <div className="item-checkIn">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="info-checkIn">
                <h2>Tên địa điểm check in</h2>
                <div
                  className="mutual-checkIns
"
                >
                  Thành Phố Hồ Chí Minh
                </div>
                <div className="mutual-checkIns">
                  Ghé thăm vào ngày: 5/4/2021
                </div>
              </div>
            </div>
            <div className="icon-item__checkIn">...</div>
          </div>
          <div className="wrap-item__checkIn">
            <div className="item-checkIn">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="info-checkIn">
                <h2>Tên địa điểm check in</h2>
                <div
                  className="mutual-checkIns
"
                >
                  Thành Phố Hồ Chí Minh
                </div>
                <div className="mutual-checkIns">
                  Ghé thăm vào ngày: 5/4/2021
                </div>
              </div>
            </div>
            <div className="icon-item__checkIn">...</div>
          </div>
          <div className="wrap-item__checkIn">
            <div className="item-checkIn">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="info-checkIn">
                <h2>Tên địa điểm check in</h2>
                <div
                  className="mutual-checkIns
"
                >
                  Thành Phố Hồ Chí Minh
                </div>
                <div className="mutual-checkIns">
                  Ghé thăm vào ngày: 5/4/2021
                </div>
              </div>
            </div>
            <div className="icon-item__checkIn">...</div>
          </div>
        </div>
        <div className="see-all__checkIn">xem tất cả</div>
      </div>
    </>
  );
};

export default CheckInIntroduce;
