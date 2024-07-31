import React from 'react'
import PostComments from './PostComments'

function PostCard({ content }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <p className="text-gray-600">{content}</p>
      {/* <PostComments /> */}
    </div>
  )
}

export default PostCard
