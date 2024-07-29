import React from "react";
import Signup from "./pages/Authentication/Signup";
import Signin from "./pages/Authentication/Signin";
import { BrowserRouter } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import FriendsPage from "./pages/Friends/Friends";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/User-context";

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={ <Layout /> } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={ <FriendsPage /> } />

        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
