import "./profile.scss";
import { Outlet, Link } from "react-router-dom";

import {
  MdModeEdit,
  MdOutlineAddCircleOutline,
  MdPhotoCamera,
  MdMoreHoriz,
} from "react-icons/md";

const Profile = () => {
  return (
    <div className="profile">
      {/* ảnh cover */}
      <div className="profile-user">
        <div className="profile-image__cover">
          <img src="../assets/cover1.jpg" alt="" />
        </div>
        {/* info */}
        <div className="profile-user__info">
          <div className="user-info">
            <div className="user-info__avatar">
              <img src="../assets/avatar1.jpg" alt="" />
              <div className="wrap-icon-avatar">
                <MdPhotoCamera className="icon-avatar" />
              </div>
            </div>
            <div className="user-info__general">
              <h2>Thái Minh Quang</h2>
              <span>80 bạn bè</span>
              <div className="user-info__friends">
                <img src="../assets/avatar6.jpg" alt="" />
                <img src="../assets/avatar1.jpg" alt="" />
                <img src="../assets/avatar2.jpg" alt="" />
                <img src="../assets/avatar3.jpg" alt="" />
                <img src="../assets/avatar4.jpg" alt="" />
                <img src="../assets/avatar4.jpg" alt="" />
                <div className="more-friends">
                  <MdMoreHoriz className="iconUser-info__friends" />
                  <span>More</span>
                </div>
              </div>
            </div>
            <div className="user-info__edit">
              <span>
                <MdModeEdit className="icon-user__edit" />
                Chỉnh sửa trang cá nhân
              </span>
              <span>
                <MdOutlineAddCircleOutline className="icon-user__edit" />
                Thêm tin của bạn
              </span>
            </div>
          </div>
        </div>
        <div className="post-items ">
          <div className="post-item active">
            <Link className="link-post" to="posts">
              Bài viết
            </Link>
          </div>
          <div className="post-item">
            <Link className="link-post" to="introduce">
              Giới thiệu
            </Link>
          </div>
          <div className="post-item">
            <Link className="link-post" to="friends">
              Bạn bè
            </Link>
          </div>
          <div className="post-item">
            <Link className="link-post" to="images">
              Ảnh
            </Link>
          </div>
          <div className="post-item">
            <Link className="link-post" to="videos">
              Video
            </Link>
          </div>
          <div className="post-item">
            <Link className="link-post" to="checkIn">
              Check in
            </Link>
          </div>
          <div className="post-item">
            <Link className="link-post" to="seeMore">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Profile;
