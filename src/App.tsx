import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { useSelector } from "react-redux";
// import type { RootState } from "./Type/types";

// ladding
// import Landing from "./Components/Layouts/Landing";

// auth
// import LoginForm from "./Components/Auth/LoginForm";
// import LogoutButton from "./Components/Auth/RegisterForm";
// protected
import ProtectedRoute from "./Components/routing/ProtectedRoute";

// import Page
// import Auth from "./pages/Auth/Auth";
import Homepage from "./pages/HomePage/Homepage";
import Profile from "./pages/Profile/Profile";
import FriendPage from "./pages/FriendPage/FriendPage";
import JobPage from "./pages/JobPage/JobPage";
import WatchPage from "./pages/WatchPage/WatchPage";
import MessagePage from "./pages/MessagePage/MessagePage";
import ShoppingPage from "./pages/ShoppingPage/ShoppingPage";
import GroupPage from "./pages/GroupPage/GroupPage";
// import css
import "./App.css";
import ProfilePost from "./Components/Profile/Posts/ProfilePost";
import ProfileIntroduce from "./Components/Profile/Introduces/ProfileIntroduce";
import ProfileFriend from "./Components/Profile/Friends/ProfileFriend";
import ProfileImage from "./Components/Profile/Images/ProfileImage";
import ProfileVideo from "./Components/Profile/Videos/ProfileVideo";
import ProfileCheckIn from "./Components/Profile/CheckIn/ProfileCheckIn";

function App() {
  // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Landing />} />
          <Route path="/" element={<Auth />}>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<LogoutButton />} />
          </Route> */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="homepage" element={<Homepage />} />
            <Route path="profile" element={<Profile />}>
              <Route path="posts" element={<ProfilePost />} />
              <Route path="introduce" element={<ProfileIntroduce />} />
              <Route path="friends" element={<ProfileFriend />} />
              <Route path="images" element={<ProfileImage />} />
              <Route path="videos" element={<ProfileVideo />} />
              <Route path="checkIn" element={<ProfileCheckIn />} />
            </Route>
            <Route path="jobPage" element={<JobPage />} />
            <Route path="watchPage" element={<WatchPage />} />
            <Route path="messagePage" element={<MessagePage />} />
            <Route path="shoppingPage" element={<ShoppingPage />} />
            <Route path="friendPage" element={<FriendPage />} />
            <Route path="groupPage" element={<GroupPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
