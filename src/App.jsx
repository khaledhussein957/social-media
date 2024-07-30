import React from "react";
import { BrowserRouter } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import { Route, Routes } from "react-router-dom";
import { UserProvider, useUser } from "./context/User-context";
import Home from "./pages/Home.jsx";
import Header from "./components/Header/Header.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Friends from "./pages/Friends.jsx";
import Notification from "./pages/Notification.jsx";
import UpdateUserForm from "./components/User/UpdateUserForm.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {


  return (
    <div>
      <Header />
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={ <Home /> } />
          <Route path="/profile" element={ <ProfilePage /> } />
          <Route path="/update-profile" element={ <UpdateUserForm /> } />
          <Route path="/friends" element={ <Friends /> } />
          <Route path="/notification" element={ <Notification /> } />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
