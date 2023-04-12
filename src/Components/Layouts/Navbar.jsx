import { Link } from "react-router-dom";

import {
  MdSearch,
  MdOutlineGridOn,
  MdNotifications,
  MdOutlineChat,
} from "react-icons/md";

import "./navbar.scss";
import { useState } from "react";

const Navbar = (props) => {
  // const [activeItem, setActiveItem] = useState("");
  const [activeIconNotify, setActiveIconNotify] = useState("");
  const [activeIconChat, setActiveIconChat] = useState("");
  const [activeIconMenu, setActiveIconMenu] = useState("");

  const { showMore, pathname } = props;

  const handleClickIconMenu = () => {
    if (!activeIconMenu) {
      setActiveIconMenu("active");
      setActiveIconChat("");
      setActiveIconNotify("");
    } else {
      setActiveIconMenu("");
    }
  };

  const handleClickIconNotify = () => {
    if (!activeIconNotify) {
      setActiveIconNotify("active");
      setActiveIconChat("");
      setActiveIconMenu("");
    } else {
      setActiveIconNotify("");
    }
  };

  const handleClickIconChat = () => {
    if (!activeIconChat) {
      setActiveIconChat("active");
      setActiveIconNotify("");
      setActiveIconMenu("");
    } else {
      setActiveIconChat("");
    }
  };
  console.log(showMore);
  console.log(pathname);
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav_logoInput">
          <Link to="/" className="nav-logo">
            QFace
          </Link>
          <div className="nav-input">
            <input type="text" className="input-search" />
            <MdSearch className="nav-input__icon" />
          </div>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              to="homePage"
              className={`nav-link ${pathname === "/homePage" ? "active" : ""}`}
            >
              Trang chủ
            </Link>

            <Link
              to="friendPage"
              className={`nav-link ${
                pathname === "/friendPage" ? "active" : ""
              }`}
            >
              Bạn bè
            </Link>

            <Link
              to="watchPage"
              className={`nav-link ${
                pathname === "/watchPage" ? "active" : ""
              }`}
            >
              Watch
            </Link>

            <Link
              to="groupPage"
              className={`nav-link ${
                pathname === "/groupPage" ? "active" : ""
              }`}
            >
              Nhóm
            </Link>

            <Link
              to="shoppingPage"
              className={`nav-link ${
                pathname === "/shoppingPage" ? "active" : ""
              }`}
            >
              Mua sắm
            </Link>
          </li>
        </ul>

        <div className="nav-user__setup">
          <div
            className={`nav-menu nav-wrap__icon ${activeIconMenu}`}
            onClick={handleClickIconMenu}
          >
            <MdOutlineGridOn className="nav-menu__icon nav-icon" />
            <div className="suggest">
              Menu
              <div className="arrow-up"></div>
            </div>
          </div>
          <div
            className={`nav-notify nav-wrap__icon ${activeIconNotify}`}
            onClick={handleClickIconNotify}
          >
            <span>1</span>
            <MdNotifications className="nav-notify__icon nav-icon" />
            <div className="suggest">
              thông báo
              <div className="arrow-up"></div>
            </div>
          </div>
          <div
            className={`nav-chat nav-wrap__icon ${activeIconChat}`}
            onClick={handleClickIconChat}
          >
            <span>2</span>
            <MdOutlineChat className="nav-chat__icon nav-icon" />
            <div className="suggest">
              Messager
              <div className="arrow-up"></div>
            </div>
          </div>
          <Link className="nav-user nav-wrap__icon" to="profile/introduce">
            {/* <MdNotifications className="nav-user__icon nav-icon" /> */}
            <img
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-1/128874832_671366850176578_1800217870310205780_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nErYauU-RNAAX-U-Ayr&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCKFVJvRYjDjJKYt5g2Q2lqvnEF_LIDCP3_In5c9MquLg&oe=645178FC"
              alt=""
            />
            <div className="suggest">
              Tài khoản
              <div className="arrow-up"></div>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
