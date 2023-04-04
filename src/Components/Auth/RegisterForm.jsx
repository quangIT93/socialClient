import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";

import { MdClose } from "react-icons/md";
const LogoutButton = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [closeForm, setCloseForm] = useState("");
  const [activeOpenFrom, setActiveOpenFrom] = useState("");

  const handleSubmit = () => {
    dispatch(logout());
  };

  const handleCloseForm = () => {
    console.log("actiove");
    setCloseForm("active");
    setActiveOpenFrom("active");
  };

  const handleClickOpenForm = () => {
    console.log("actiove");
    setCloseForm("");
    setActiveOpenFrom("");
  };
  return (
    <>
      <div className={`open-wrap__form ${activeOpenFrom}`}>
        Nếu bạn chưa có tài khoản vui lòng đăng ký để trải nghiệm ứng dụng
        <span onClick={handleClickOpenForm} className="open-form">
          {" "}
          Register
        </span>
        <br />
        <br />
        Nếu bạn đã có tài khoản hãy click vào nút{" "}
        <Link to="/login" className="open-form">
          Login
        </Link>{" "}
        để đăng nhập
      </div>

      <div className={`form-container ${closeForm}`}>
        <h2>Register</h2>
        <div className="form login_form">
          <form onSubmit={handleSubmit}>
            <MdClose className="icon_close" onClick={handleCloseForm} />
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button type="submit">Register Now</button>
            {/* <div className="option-field">
            <span>
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">Remember me</label>
            </span>
            <Link to="/">Forgot password</Link>
          </div> */}
            <div className="register_signIn">
              Already have a account? <Link to="/login">Sign-up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogoutButton;
