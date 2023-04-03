import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";

import { Link } from "react-router-dom";

import {
  MdClose,
  MdOutlineVisibilityOff,
  MdOutlineVisibility,
  MdPerson2,
} from "react-icons/md";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  console.log(username);
  console.log(password);

  return (
    <div className="form-container">
      <h2>Login</h2>
      <div className="form login_form">
        <form onSubmit={handleSubmit}>
          <MdClose className="icon_close" />
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login now</button>
          <div className="option-field">
            <span>
              <input type="checkbox" name="" id="check" />
              <label htmlFor="check">Remember me</label>
            </span>
            <Link to="/">Forgot password</Link>
          </div>
          <div className="login_signUp">
            Already have a account? <Link to="/register"> Sign-in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
