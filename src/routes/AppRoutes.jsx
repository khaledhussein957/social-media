import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Signin from '../pages/Authentication/Signin'
import Signup from '../pages/Authentication/Signup'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AuthMiddleware from '../secure/Secure'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'


function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route
          path="/api/users/login"
          element={
            <AuthMiddleware>
              <Signin />
            </AuthMiddleware>
          }
        />
        <Route
          path="/api/users/register"
          element={
            <AuthMiddleware>
              <Signup />
            </AuthMiddleware>
          }
        />
        
          
            <Route path="/" exact element={ <Home />} />
            <Route path="/friends"  />
            <Route path="/profile"  />

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
