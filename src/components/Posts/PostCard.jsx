import React from 'react'

function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <p className="text-gray-600">{post.content}</p>
    </div>
  )
}

export default PostCard
