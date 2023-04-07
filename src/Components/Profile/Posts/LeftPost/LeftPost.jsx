import "./leftPost.scss";
// import { Outlet, Link } from "react-router-dom";

// import {
//   MdFlag,
//   MdAddAPhoto,
//   MdAddPhotoAlternate,
//   MdVideoCameraBack,
// } from "react-icons/md";

const LeftPost = () => {
  return (
    <div className="profile-post__left ">
      <div className="post-left__introduce">
        <h2>Giới thiệu</h2>
        <div>Thêm tiểu sử</div>
        <ul>
          <li>
            Học trường <span>RMIT</span>
          </li>
          <li>
            Sống Tại <span>Thành Phố Hồ Chí Minh</span>
          </li>
          <li>
            Đến từ <span>Thành Phố Hồ Chí Minh</span>
          </li>
        </ul>
        <div>Chỉnh sửa chi tiết</div>

        <div>Thêm sở thích</div>

        <div>Thêm nội dung đáng chú ý</div>
      </div>
      <div className="post-left__image">
        <div className="title-image">
          <h2>Ảnh</h2>
          <span>Xem tất cả</span>
        </div>
        <div className="items-image">
          <div className="item-image">
            <img src="../../assets/avatar1.jpg" alt="" />
          </div>
          <div className="item-image">
            <img src="../../assets/avatar2.jpg" alt="" />
          </div>
          <div className="item-image">
            <img src="../../assets/avatar3.jpg" alt="" />
          </div>
          <div className="item-image">
            <img src="../../assets/avatar4.jpg" alt="" />
          </div>
          <div className="item-image">
            <img src="../../assets/avatar5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="post-left__friend">
        <div className="title-friend">
          <h2>Ban bè ( 80 người )</h2>
          <span>Xem tất cả</span>
        </div>
        <div className="items-friend">
          <div className="item-friend">
            <img src="../../assets/avatar1.jpg" alt="" />
            <span> Một cái tên</span>
          </div>
          <div className="item-friend">
            <img src="../../assets/avatar2.jpg" alt="" />
            <span> Một cái tên</span>
          </div>
          <div className="item-friend">
            <img src="../../assets/avatar3.jpg" alt="" />
            <span> Một cái tên</span>
          </div>
          <div className="item-friend">
            <img src="../../assets/avatar4.jpg" alt="" />
            <span> Một cái tên</span>
          </div>
          <div className="item-friend">
            <img src="../../assets/avatar6.jpg" alt="" />
            <span> Một cái tên</span>
          </div>
          <div className="item-friend">
            <img src="../../assets/avatar6.jpg" alt="" />
            <span> Một cái tên</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPost;
