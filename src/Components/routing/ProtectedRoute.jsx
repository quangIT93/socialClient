import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from "../Layouts/Navbar";

const ProtectedRoute = () => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoute;
