import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

function LayoutPage() {
  return (
    <div>
      <div className='ml-64'>
      <Header />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default LayoutPage
