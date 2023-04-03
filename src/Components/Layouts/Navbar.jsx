import { Link } from "react-router-dom";

import {
  MdSearch,
  MdOutlineGridOn,
  MdNotifications,
  MdOutlineChat,
} from "react-icons/md";

import "./navbar.scss";

const Navbar = () => {
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
            <Link to="" className="nav-link active">
              Trang chủ
            </Link>

            <Link to="" className="nav-link">
              Bạn bè
            </Link>

            <Link to="" className="nav-link">
              Watch
            </Link>

            <Link to="" className="nav-link">
              Nhóm
            </Link>

            <Link to="" className="nav-link">
              Mua sắm
            </Link>
          </li>
        </ul>

        <div className="nav-user__setup">
          <div className="nav-menu nav-wrap__icon">
            <MdOutlineGridOn className="nav-menu__icon nav-icon" />
            <div className="suggest">Menu</div>
          </div>
          <div className="nav-notify nav-wrap__icon">
            <span>1</span>
            <MdNotifications className="nav-notify__icon nav-icon" />
            <div className="suggest">thông báo</div>
          </div>
          <div className="nav-chat nav-wrap__icon">
            <span>2</span>
            <MdOutlineChat className="nav-chat__icon nav-icon" />
            <div className="suggest">Messager</div>
          </div>
          <div className="nav-user nav-wrap__icon">
            {/* <MdNotifications className="nav-user__icon nav-icon" /> */}
            <img
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-1/128874832_671366850176578_1800217870310205780_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nErYauU-RNAAX-U-Ayr&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCKFVJvRYjDjJKYt5g2Q2lqvnEF_LIDCP3_In5c9MquLg&oe=645178FC"
              alt=""
            />
            <div className="suggest">Tài khoản</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
