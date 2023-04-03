import React from "react";
import { Outlet } from "react-router-dom";
import "./auth.scss";

// import component
import Navbar from "../../Components/Layouts/Navbar";
function Auth() {
  const body = <Outlet />;
  return (
    <>
      <div className="dashboard">
        <Navbar />
        {body}
      </div>
    </>
  );
}

export default Auth;
