import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { UserProvider, useUser } from "./context/User-context";
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import UpdateUserForm from "./components/User/UpdateUserForm.jsx";
import LayoutPage from "./Layout/LayoutPage.jsx";

function App() {
  return (
    <div>
      <UserProvider>
        <LayoutPage />
      </UserProvider>
    </div>
  );
}

export default App;
