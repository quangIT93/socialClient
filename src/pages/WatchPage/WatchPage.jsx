import { useState, useRef } from "react";

import "./watchPage.scss";

import { Link } from "react-router-dom";
import {
  MdPeopleAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import { itemWatchPage } from "./itemWatchPage";
const WatchPage = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const handleShowMore = () => {
    if (displayCount < itemWatchPage.length) {
      setDisplayCount(itemWatchPage.length);
    } else {
      setDisplayCount(5);
    }
  };
  return (
    <div className="watchPage">
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
        {itemWatchPage.slice(0, displayCount).map((v, i) => {
          return (
            <Link to={v.itemLink} className="left-wrapItem">
              <div className="left-item">
                {v.itemIcon}
                {v.itemName}
              </div>
            </Link>
          );
        })}
        <div className="left-wrapItem" onClick={handleShowMore}>
          <div className="left-item more-item">
            {displayCount < itemWatchPage.length ? (
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
      <div className="homePage-posts"></div>
      <div className="homePage-infos"></div>
    </div>
  );
};

export default WatchPage;
