import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import type { RootState } from "./Type/types";

// ladding
import Landing from "./Components/Layouts/Landing";

// auth
import LoginForm from "./Components/Auth/LoginForm";
import LogoutButton from "./Components/Auth/RegisterForm";
// protected
import ProtectedRoute from "./Components/routing/ProtectedRoute";

// import Page
import Auth from "./pages/Auth/Auth";
import Homepage from "./pages/Homepage";

// import css
import "./App.css";
function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Auth />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<LogoutButton />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
