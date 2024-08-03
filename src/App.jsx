import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/User-context";
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Friends from "./pages/Friends.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import DevTeam from "./components/Dev Team/DevTeam.jsx";
import UpdateUserForm from "./components/User/UpdateUserForm.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  return (
      <UserProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/devTeam" element={<DevTeam />} />
              <Route path="/update-profile" element={<UpdateUserForm />} />
            </Routes>
          </div>
        </div>
      </UserProvider>
  );
}

export default App;
