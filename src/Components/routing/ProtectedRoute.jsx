import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import Navbar from "../Layouts/Navbar";

const ProtectedRoute = () => {
  const isAuthenticated = true;

  const [showMore, setShowMore] = useState("");

  const changePage = useNavigate();
  const pathname = useLocation().pathname;

  const handlePageChange = useCallback(() => {
    console.log("pathname thay doi", pathname);
    if (pathname === "/profile") {
      changePage("/profile/posts");
    }
  }, [pathname, changePage]);

  useEffect(() => {
    handlePageChange();
  }, [handlePageChange]);

  return isAuthenticated ? (
    <>
      <Navbar
        showMore={showMore}
        setShowMore={setShowMore}
        pathname={pathname}
      />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoute;
