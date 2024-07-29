import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <h1 className="text-lg font-bold mb-4">Main Content</h1>
          <p>This is the main content area.</p>
        </main>
      </div>
      
      <Outlet />
    </div>

  )
}

export default Layout
