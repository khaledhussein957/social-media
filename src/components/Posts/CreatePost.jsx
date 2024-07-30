import React, { useState } from 'react';
import axios from 'axios'; // or use fetch
import toast from 'react-hot-toast';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');
  const [loading, setLoading] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('user'); 

    try {
      const {data} = await axios.post('/api/create-post', postContent);

      console.log('Post created:', data);
      toast.success('Post created successfully!');
    } catch (error) {
      console.log('Error creating post:', error);
      toast.error('Filed to create post!');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="border border-gray-300 p-2 w-full"
          placeholder="Write your post here"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          { loading ? "creating..."  : "Create Post" }
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
