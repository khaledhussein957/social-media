import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Signin from '../pages/Authentication/Signin'
import Signup from '../pages/Authentication/Signup'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AuthMiddleware from '../secure/Secure'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import FriendsPage from '../pages/Friends/Friends'


function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthMiddleware>
              <Signin />
            </AuthMiddleware>
          }
        />
        <Route
          path="/register"
          element={
            <AuthMiddleware>
              <Signup />
            </AuthMiddleware>
          }
        />
        
          
            <Route path="/" exact element={ <Home />} />
            <Route path="/friends"  element={ <FriendsPage /> } />
            <Route path="/profile"  />

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
