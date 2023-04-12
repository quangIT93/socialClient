import "./messagePage.scss";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
const MessagePage = () => {
  return (
    <div className="messagePage">
      {" "}
      <div className="left-items">
        <Link to="/homePage" className="left-wrapItem">
          <div className="left-item">
            <div className="left-item__user">
              <div className="wrap-item__imgUser">
                <img src="../assets/avatar1.jpg" alt="" />
              </div>
              <h2>Thái Minh Quang</h2>
            </div>
          </div>
        </Link>
        <Link to="/friendPage" className="left-wrapItem">
          <div className="left-item">
            <MdPeopleAlt className="icon-item" />
            Friend
          </div>
        </Link>
        <Link to="/watchPage" className="left-wrapItem">
          <div className="left-item">
            <MdPeopleAlt className="icon-item" />
            Watch
          </div>
        </Link>
        <Link to="/groupPage" className="left-wrapItem">
          <div className="left-item">
            <MdPeopleAlt className="icon-item" />
            Group
          </div>
        </Link>
        <Link to="/messagePage" className="left-wrapItem">
          <div className="left-item">
            <MdPeopleAlt className="icon-item" />
            Message
          </div>
        </Link>
        <Link to="/shoppingPage" className="left-wrapItem">
          <div className="left-item">
            <MdPeopleAlt className="icon-item" />
            Shopping
          </div>
        </Link>
      </div>
      <div className="homePage-posts"></div>
      <div className="homePage-infos"></div>
    </div>
  );
};

export default MessagePage;
