import { useState } from "react";

import "./friendPage.scss";

import { Link } from "react-router-dom";

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
        <div className="left-header">
          <h2>Friend</h2>
        </div>
        {itemFriendPage.slice(0, displayCount).map((v, i) => {
          return (
            <Link to={v.itemLink} className="left-wrapItem" key={i}>
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
          <h2>Lời mời kết bạn</h2>
        </div>
        <div className="list-items__right">
          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/avatar3.jpg" alt="" />
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
              <img src="../../assets/avatar2.jpg" alt="" />
            </div>
            <div className="item-right__content">
              <h2>Tên bạn bè Tên bạn bè ạn bè </h2>
              <div className="number-friends">1 bạn chung</div>
              <div className="btn-accept">Xác nhận</div>
              <div className="btn-delete">Xoá</div>
            </div>
          </div>

          <div className="item-right">
            <div className="img-item">
              <img src="../../assets/avatar4.jpg" alt="" />
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
              <img src="../../assets/avatar1.jpg" alt="" />
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
              <img src="../../assets/avatar5.jpg" alt="" />
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
