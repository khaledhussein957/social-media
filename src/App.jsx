import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App
