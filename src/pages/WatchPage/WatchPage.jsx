import { useState, useRef } from "react";

import "./watchPage.scss";

import { Link } from "react-router-dom";
import {
  MdPeopleAlt,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import {
  MdFlag,
  // MdAddAPhoto,
  MdAddPhotoAlternate,
  MdVideoCameraBack,
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
        <div className="left-header">
          <h2>Watch</h2>
        </div>
        {itemWatchPage.slice(0, displayCount).map((v, i) => {
          return (
            <Link to={v.itemLink} className="left-wrapItem" key={i}>
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
      <div className="right-items">
        <div className="watch-post-right">
          <div className="wrap-post__item">
            <div className="item-post">
              <div className="user-post">
                <div className="user-post__info">
                  <div className="user-post__image">
                    <img src="../../assets/avatar4.jpg" alt="" />
                  </div>
                  <div className="user-info__date">
                    <h2>Henry Web Dev</h2>
                    <span>5/4/2022</span>
                  </div>
                </div>
                <MdMoreHoriz className="icon-user__post" />
              </div>
              <div className="content-post">
                <div className="texts-post">
                  <div className="text-post">
                    Hướng dẫn Full Stack TypeScript, GraphQL, Apollo, React &
                    Next.js.
                  </div>
                </div>
                <div className="image-post">
                  {/* <img src="../../assets/image-post1.jpg" alt="" /> */}
                  <iframe
                    width="100%"
                    height="498"
                    src="https://www.youtube.com/embed/1UMNUbtzQXk"
                    title="Hướng dẫn Full Stack TypeScript, GraphQL, Apollo, React &amp; Next.js"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
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
                    <img src="../../assets/avatar2.jpg" alt="" />
                  </div>
                  <div className="user-info__date">
                    <h2>Evondev</h2>
                    <span>5/4/2022</span>
                  </div>
                </div>
                <MdMoreHoriz className="icon-user__post" />
              </div>
              <div className="content-post">
                <div className="texts-post">
                  <div className="text-post">
                    Bạn đã thực sự “thành thạo” CSS Flexbox chưa ?.
                  </div>
                </div>
                <div className="image-post">
                  <iframe
                    width="100%"
                    height="498"
                    src="https://www.youtube.com/embed/i4z7PIlvJkg"
                    title="Bạn đã thực sự “thành thạo” CSS Flexbox chưa ? 🤔"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
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
                            1 đoạn text Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Harum nisi atque consequuntur
                            temporibus quos cum! Voluptatem, ab accusantium
                            dolorem inventore quae ipsum architecto, pariatur
                            non, possimus voluptates quaerat quidem omnis?
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

export default WatchPage;
