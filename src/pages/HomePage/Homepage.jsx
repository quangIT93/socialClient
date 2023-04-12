import { useState, useRef } from "react";

import { Link } from "react-router-dom";
import "./homePage.scss";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMoreHoriz,
  MdOutlineShare,
  MdModeComment,
  MdCameraEnhance,
  MdSearch,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";

import {
  FaHeart,
  FaLaugh,
  FaThumbsUp,
  FaRegCommentAlt,
  FaRegShareSquare,
} from "react-icons/fa";

import { itemHomePage } from "./itemHomePage";

const Homepage = () => {
  const [displayCount, setDisplayCount] = useState(5);

  const ref = useRef(null);

  const handleClickScrollLeft = () => {
    ref.current.scrollBy({
      left: 256, // scroll qua 4rem
      // behavior: "smooth", // thêm hiệu ứng smooth scroll
    });
  };

  const handleClickScrollRight = () => {
    ref.current.scrollBy({
      left: -256, // scroll qua 4rem
      // behavior: "smooth", // thêm hiệu ứng smooth scroll
    });
  };

  const handleShowMore = () => {
    if (displayCount < itemHomePage.length) {
      setDisplayCount(itemHomePage.length);
    } else {
      setDisplayCount(5);
    }
  };
  return (
    <div className="homePage">
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
        {itemHomePage.slice(0, displayCount).map((v, i) => {
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
            {displayCount < itemHomePage.length ? (
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
      <div className="homePage-posts">
        <div className="homePage-post__feed">
          <div className="items-feed">
            <div className="news-feed item-feed active">Tin tức</div>
            <div className="video-feed item-feed">Video</div>
          </div>
          <div className="show-feed">
            <div className="wrap-all__feed" ref={ref}>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar1.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar1.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">
                    Thái Minh Quang s s s sgdjhagd hjhg jh ghjg j
                  </div>
                </div>
              </div>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar2.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar1.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">Thái Minh Quang</div>
                </div>
              </div>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar4.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar3.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">Thái Minh Quang</div>
                </div>
              </div>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar3.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar5.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">Thái Minh Quang</div>
                </div>
              </div>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar2.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar2.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">Thái Minh Quang</div>
                </div>
              </div>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar3.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar1.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">Thái Minh Quang</div>
                </div>
              </div>
              <div className="wrap-feed">
                <div className="feed-img">
                  <img src="../assets/avatar1.jpg" alt="" />
                  <div className="feed-Imguser">
                    <img src="../assets/avatar5.jpg" alt="" />
                  </div>
                  <div className="feed-nameUser">Thái Minh Quang</div>
                </div>
              </div>
            </div>
            <div className="scroll-left__feed" onClick={handleClickScrollLeft}>
              <MdArrowForwardIos />
            </div>
            <div
              className="scroll-right__feed"
              onClick={handleClickScrollRight}
            >
              <MdArrowBackIosNew />
            </div>
          </div>
        </div>
        <div className="homePage-post__create">
          <div className="user-create__post">
            <div className="wrap-img__create">
              <img src="../assets/avatar2.jpg" alt="" />
            </div>
            <input type="text" placeholder="Nhập đoạn text của bạn..." />
          </div>
          <div className="options-create__post">
            <div className="option-create">Video</div>
            <div className="option-create">Ảnh</div>
            <div className="option-create">Cảm xúc</div>
          </div>
        </div>
        <div className="homePage-post__items">
          <div className="item-post">
            <div className="user-post">
              <div className="user-post__info">
                <div className="user-post__image">
                  <img src="../../assets/avatar1.jpg" alt="" />
                </div>
                <div className="user-info__date">
                  <h2>Thái Minh Quang</h2>
                  <span>5/4/2022</span>
                </div>
              </div>
              <MdMoreHoriz className="icon-user__post" />
            </div>
            <div className="content-post">
              <div className="texts-post">
                <div className="text-post">
                  Tháng này bên m có triển khai đào tạo mảng #Frontend_ReactJS
                  theo nguồn doanh nghiệp.
                </div>
                <div className="text-post">Thời gian : 2b tối/tuần</div>
                <div className="text-post">Hình thức: Online/Offline</div>
                <div className="text-post">
                  Nội dung đào tạo: HTML, CSS,BOOSTRAPT -{">"} javascript -{">"}
                  Reactjs và các component trong Reactjs ={">"} Triển khai
                  project
                </div>
                <div className="text-post">
                  (30% lý thuyết + 70% thực hành; thực hiện 2 mini project +
                  project tổng)
                </div>
                <div className="text-post">
                  {" "}
                  Có record sau mỗi buổi học hoặc được học lại miễn phí.
                </div>
                <div className="text-post">Có hỗ trợ dấu thực tập </div>
                <div className="text-post">
                  Có cấp chứng chỉ và hỗ trợ job sau khi kết thúc khóa đào tạo
                </div>
                <div className="text-post">
                  Bạn cần cải thiện mảng này ib mình trao đổi cụ thể thêm nhé!
                </div>
              </div>
              <div className="image-post">
                <img src="../../assets/image-post1.jpg" alt="" />
              </div>
            </div>
            <div className="interacts-post">
              <div className="show-interact interact-post">
                <div className="all-likes">
                  <FaThumbsUp color="#48a5f2" className="icon-show__interact" />
                  <FaHeart color="red" className="icon-show__interact" />
                  <FaLaugh color="yellow" className="icon-show__interact" />
                  <span>20k</span>
                </div>
                <div className="all-commentShare">
                  <div className="comment-icon">
                    <FaRegCommentAlt color="#ccc" />
                    <span>1.6k</span>
                  </div>
                  <div className="share-icon">
                    <FaRegShareSquare color="#ccc" />
                    <span>1.6k</span>
                  </div>
                </div>
              </div>
              <div className="activitive-interact interact-post">
                <div className="swap-icon">
                  <FaThumbsUp />
                  <span>like</span>
                </div>
                <div className="swap-icon">
                  <MdModeComment />
                  <span>comment</span>
                </div>
                <div className="swap-icon">
                  <MdOutlineShare />
                  <span>share</span>
                </div>
              </div>
              <div className="create-comment interact-post">
                <div className="wrap-create__comment">
                  <div className="swap-user__interact">
                    <img src="../../assets/avatar1.jpg" alt="" />
                  </div>
                  <div className="swap-input__comment">
                    <input type="text" placeholder="Nhập comment của bạn" />
                  </div>
                </div>
                <div className="show-comments">
                  <div className="show-comment">
                    <div className="image-user__comment">
                      <img src="../../assets/avatar1.jpg" alt="" />
                    </div>
                    <div className="swap-comment-user">
                      <div className="comment-user">
                        <h2>Quỳnh Như</h2>
                        <div className="text-comment">
                          1 đoạn text comment1 đoạn text comment1 đoạn text 1
                          đoạn text comment1 đoạn text comment1 đoạn text 1 đoạn
                          text comment1 đoạn text comment1 đoạn text comment
                        </div>
                      </div>
                      <div className="like-comment">
                        <span>like</span>
                        <span>phản hồi</span>
                        <span>chia sẻ</span>
                      </div>
                    </div>
                  </div>
                  <div className="show-comment">
                    <div className="image-user__comment">
                      <img src="../../assets/avatar1.jpg" alt="" />
                    </div>
                    <div className="swap-comment-user">
                      <div className="comment-user">
                        <h2>Quỳnh Như</h2>
                        <div className="text-comment">1 đoạn text comment</div>
                      </div>
                      <div className="like-comment">
                        <span>like</span>
                        <span>phản hồi</span>
                        <span>chia sẻ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-all__comments">
                <span>Xem thêm bình luận</span>
              </div>
            </div>
          </div>
          <div className="item-post">
            <div className="user-post">
              <div className="user-post__info">
                <div className="user-post__image">
                  <img src="../../assets/avatar1.jpg" alt="" />
                </div>
                <div className="user-info__date">
                  <h2>Thái Minh Quang</h2>
                  <span>5/4/2022</span>
                </div>
              </div>
              <MdMoreHoriz className="icon-user__post" />
            </div>
            <div className="content-post">
              <div className="texts-post">
                <div className="text-post">
                  Tháng này bên m có triển khai đào tạo mảng #Frontend_ReactJS
                  theo nguồn doanh nghiệp.
                </div>
                <div className="text-post">Thời gian : 2b tối/tuần</div>
                <div className="text-post">Hình thức: Online/Offline</div>
                <div className="text-post">
                  Nội dung đào tạo: HTML, CSS,BOOSTRAPT -{">"} javascript -{">"}
                  Reactjs và các component trong Reactjs ={">"} Triển khai
                  project
                </div>
                <div className="text-post">
                  (30% lý thuyết + 70% thực hành; thực hiện 2 mini project +
                  project tổng)
                </div>
                <div className="text-post">
                  {" "}
                  Có record sau mỗi buổi học hoặc được học lại miễn phí.
                </div>
                <div className="text-post">Có hỗ trợ dấu thực tập </div>
                <div className="text-post">
                  Có cấp chứng chỉ và hỗ trợ job sau khi kết thúc khóa đào tạo
                </div>
                <div className="text-post">
                  Bạn cần cải thiện mảng này ib mình trao đổi cụ thể thêm nhé!
                </div>
              </div>
              <div className="image-post">
                <img src="../../assets/image-post1.jpg" alt="" />
              </div>
            </div>
            <div className="interacts-post">
              <div className="show-interact interact-post">
                <div className="all-likes">
                  <FaThumbsUp color="#48a5f2" className="icon-show__interact" />
                  <FaHeart color="red" className="icon-show__interact" />
                  <FaLaugh color="yellow" className="icon-show__interact" />
                  <span>20k</span>
                </div>
                <div className="all-commentShare">
                  <div className="comment-icon">
                    <FaRegCommentAlt color="#ccc" />
                    <span>1.6k</span>
                  </div>
                  <div className="share-icon">
                    <FaRegShareSquare color="#ccc" />
                    <span>1.6k</span>
                  </div>
                </div>
              </div>
              <div className="activitive-interact interact-post">
                <div className="swap-icon">
                  <FaThumbsUp />
                  <span>like</span>
                </div>
                <div className="swap-icon">
                  <MdModeComment />
                  <span>comment</span>
                </div>
                <div className="swap-icon">
                  <MdOutlineShare />
                  <span>share</span>
                </div>
              </div>
              <div className="create-comment interact-post">
                <div className="wrap-create__comment">
                  <div className="swap-user__interact">
                    <img src="../../assets/avatar1.jpg" alt="" />
                  </div>
                  <div className="swap-input__comment">
                    <input type="text" placeholder="Nhập comment của bạn" />
                  </div>
                </div>
                <div className="show-comments">
                  <div className="show-comment">
                    <div className="image-user__comment">
                      <img src="../../assets/avatar1.jpg" alt="" />
                    </div>
                    <div className="swap-comment-user">
                      <div className="comment-user">
                        <h2>Quỳnh Như</h2>
                        <div className="text-comment">
                          1 đoạn text comment1 đoạn text comment1 đoạn text 1
                          đoạn text comment1 đoạn text comment1 đoạn text 1 đoạn
                          text comment1 đoạn text comment1 đoạn text comment
                        </div>
                      </div>
                      <div className="like-comment">
                        <span>like</span>
                        <span>phản hồi</span>
                        <span>chia sẻ</span>
                      </div>
                    </div>
                  </div>
                  <div className="show-comment">
                    <div className="image-user__comment">
                      <img src="../../assets/avatar1.jpg" alt="" />
                    </div>
                    <div className="swap-comment-user">
                      <div className="comment-user">
                        <h2>Quỳnh Như</h2>
                        <div className="text-comment">1 đoạn text comment</div>
                      </div>
                      <div className="like-comment">
                        <span>like</span>
                        <span>phản hồi</span>
                        <span>chia sẻ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-all__comments">
                <span>Xem thêm bình luận</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homePage-infos">
        <div className="homePage-info__sponsor">
          <h2>Tài trợ</h2>
          <div className="info-sponsor">
            <div className="info-sponsor__img">
              <img src="../assets/avatar1.jpg" alt="" />
            </div>
            <div className="info-sponsor__detail">
              <h2>2000 đô la</h2>
              <div className="user-sponsor">viettech.vn</div>
            </div>
          </div>
          <div className="info-sponsor">
            <div className="info-sponsor__img">
              <img src="../assets/avatar1.jpg" alt="" />
            </div>
            <div className="info-sponsor__detail">
              <h2>2000 đô la</h2>
              <div className="user-sponsor">viettech.vn</div>
            </div>
          </div>
        </div>

        <div className="list-friends">
          <div className="list-rights__item">
            <h2>Người liên hệ</h2>
            <div className="list-right__options">
              <MdCameraEnhance className="icon-list__right" />
              <MdSearch className="icon-list__right" />
              <MdMoreHoriz className="icon-list__right" />
            </div>
          </div>
          <div className="list-right__all">
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar1.jpg" alt="" />
              </div>
              <div className="info-rights">Thái Minh Quang</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar2.jpg" alt="" />
              </div>
              <div className="info-rights">Ái Ái</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar3.jpg" alt="" />
              </div>
              <div className="info-rights">Ly Quỳnh Châu</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar4.jpg" alt="" />
              </div>
              <div className="info-rights">Ngọc Thy</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar5.jpg" alt="" />
              </div>
              <div className="info-rights">Hoài An</div>
            </div>
          </div>
        </div>
        <div className="list-groups">
          <div className="list-rights__item">
            <h2>Trò chuyện nhóm</h2>
            <div className="list-right__options">
              <MdSearch className="icon-list__right" />
              <MdMoreHoriz className="icon-list__right" />
            </div>
          </div>
          <div className="list-right__all">
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar1.jpg" alt="" />
              </div>
              <div className="info-rights">Thái Minh Quang</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar2.jpg" alt="" />
              </div>
              <div className="info-rights">Ái Ái</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar3.jpg" alt="" />
              </div>
              <div className="info-rights">Ly Quỳnh Châu</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar4.jpg" alt="" />
              </div>
              <div className="info-rights">Ngọc Thy</div>
            </div>
            <div className="wrap-list__right">
              <div className="wrap-right__img">
                <img src="../assets/avatar5.jpg" alt="" />
              </div>
              <div className="info-rights">Hoài An</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
