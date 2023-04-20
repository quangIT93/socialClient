import { useState } from "react";

import "./groupPage.scss";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMoreHoriz,
  MdOutlineShare,
  MdModeComment,
} from "react-icons/md";

import {
  FaHeart,
  FaLaugh,
  FaThumbsUp,
  FaRegCommentAlt,
  FaRegShareSquare,
} from "react-icons/fa";

import { itemGroupPage } from "./itemGroupPage";
const GroupPage = () => {
  const [displayCount, setDisplayCount] = useState(5);
  const handleShowMore = () => {
    if (displayCount < itemGroupPage.length) {
      setDisplayCount(itemGroupPage.length);
    } else {
      setDisplayCount(5);
    }
  };
  return (
    <div className="groupPage">
      <div className="left-items">
        <div className="left-header">
          <h2>Group</h2>
        </div>
        {itemGroupPage.slice(0, displayCount).map((v, i) => {
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
            {displayCount < itemGroupPage.length ? (
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
        <div className="group-post-right">
          <div className="wrap-post__item">
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
                    Nội dung đào tạo: HTML, CSS,BOOSTRAPT -{">"} javascript -
                    {">"}
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
                    <FaThumbsUp
                      color="#48a5f2"
                      className="icon-show__interact"
                    />
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
                            đoạn text comment1 đoạn text comment1 đoạn text 1
                            đoạn text comment1 đoạn text comment1 đoạn text
                            comment
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
                          <div className="text-comment">
                            1 đoạn text comment
                          </div>
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
                    Nội dung đào tạo: HTML, CSS,BOOSTRAPT -{">"} javascript -
                    {">"}
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
                    <FaThumbsUp
                      color="#48a5f2"
                      className="icon-show__interact"
                    />
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
                            đoạn text comment1 đoạn text comment1 đoạn text 1
                            đoạn text comment1 đoạn text comment1 đoạn text
                            comment
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
                          <div className="text-comment">
                            1 đoạn text comment
                          </div>
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
      </div>
    </div>
  );
};

export default GroupPage;
