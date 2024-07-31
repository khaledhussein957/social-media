import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfilePage from "../pages/ProfilePage";
import UpdateUserForm from "../components/User/UpdateUserForm";

function LayoutPage() {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 p-8">
        <Routes>
          <Sidebar />
          <menu className="mt-16">
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/update-profile" element={<UpdateUserForm />} />
          </menu>
        </Routes>
      </div>
    </div>
  );
}

export default LayoutPage;
