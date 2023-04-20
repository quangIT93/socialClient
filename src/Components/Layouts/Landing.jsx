import { Navigate } from "react-router-dom";

const Landing = () => {
  return <Navigate to="/homepage" replace={true} />;
};

export default Landing;
