import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return <button onClick={handleClick}>Logout</button>;
};

export default LogoutButton;
