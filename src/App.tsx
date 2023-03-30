import React from "react";

import { useSelector } from "react-redux";
import type { RootState } from "./Type/types";

import "./App.css";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <p>Welcome, {isLoggedIn}!</p>
          <div>Logout</div>
        </>
      ) : (
        <div>Login</div>
      )}
    </div>
  );
}

export default App;
