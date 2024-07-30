import React from 'react'
import CreatePost from '../components/Posts/CreatePost'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/User-context';
import { useEffect } from 'react';
import { useState } from 'react';
import PostCard from '../components/Posts/PostCard';
import axios from 'axios';
import toast from 'react-hot-toast';

function Home() {

  const { user } = useUser();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  if(!user){
    useEffect(() => {
      navigate('/login');
    })
  }

  useEffect(() => {

    const readUserPost = async () => {

      setLoading(true);

      try {
        const {data} = await axios.get('/api/get-user-posts')
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        
      }
    }

    readUserPost();
  }, []);

  return (
    <div>
      Home page
      <CreatePost />
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default Home
