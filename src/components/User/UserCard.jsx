import React from 'react'

function UserCard({ user }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg">{user.firstName + " " + user.lastName}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
}

export default UserCard
