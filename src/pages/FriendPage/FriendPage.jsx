import { useState, useRef } from "react";

import "./friendPage.scss";

import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { itemFriendPage } from "./itemFriendPage";

const FriendPage = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const handleShowMore = () => {
    if (displayCount < itemFriendPage.length) {
      setDisplayCount(itemFriendPage.length);
    } else {
      setDisplayCount(5);
    }
  };
  return (
    <div className="friendPage">
      <div className="left-items">
        <Link to="/profile" className="left-wrapItem">
          <div className="left-item">
            <div className="left-item__user">
              <div className="wrap-item__imgUser">
                <img src="../assets/avatar1.jpg" alt="" />
              </div>
              <h2>Thái Minh Quang </h2>
            </div>
          </div>
        </Link>
        {itemFriendPage.slice(0, displayCount).map((v, i) => {
          return (
            <Link to={v.itemLink} className="left-wrapItem">
              <div className="left-item">
                {/* <{v.itemIcon} className="icon-item" color="#f4506d" /> */}
                {v.itemIcon}
                {v.itemName}
              </div>
            </Link>
          );
        })}
        <div className="left-wrapItem" onClick={handleShowMore}>
          <div className="left-item more-item">
            {displayCount < itemFriendPage.length ? (
              <>
                <MdKeyboardArrowDown className="icon-item" color="#ccc" />
                Xem thêm
              </>
            ) : (
              <>
                <MdKeyboardArrowUp className="icon-item" color="#ccc" />
                Thu gọn
              </>
            )}
          </div>
        </div>
      </div>
      <div className="right-items">
        <div className="header-right">
          <h2>Bạn bè</h2>
        </div>
        <div className="list-items__right">
          <div className="item-right">
            <div className="img-item">
              <img src="" alt="" />
            </div>
            <div className="item-right__content">
              <h2>Tên bạn bè</h2>
              <div className="number-friends">1 bạn chung</div>
              <div className="btn-accept">Xác nhận</div>
              <div className="btn-delete">Xoá</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="" alt="" />
            </div>
            <div className="item-right__content">
              <h2>Tên bạn bè</h2>
              <div className="number-friends">1 bạn chung</div>
              <div className="btn-accept">Xác nhận</div>
              <div className="btn-delete">Xoá</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="" alt="" />
            </div>
            <div className="item-right__content">
              <h2>Tên bạn bè</h2>
              <div className="number-friends">1 bạn chung</div>
              <div className="btn-accept">Xác nhận</div>
              <div className="btn-delete">Xoá</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="" alt="" />
            </div>
            <div className="item-right__content">
              <h2>Tên bạn bè</h2>
              <div className="number-friends">1 bạn chung</div>
              <div className="btn-accept">Xác nhận</div>
              <div className="btn-delete">Xoá</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="" alt="" />
            </div>
            <div className="item-right__content">
              <h2>Tên bạn bè</h2>
              <div className="number-friends">1 bạn chung</div>
              <div className="btn-accept">Xác nhận</div>
              <div className="btn-delete">Xoá</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
