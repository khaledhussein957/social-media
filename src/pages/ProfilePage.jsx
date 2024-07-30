import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import PostCard from '../components/Posts/PostCard'
import CreatePost from '../components/Posts/CreatePost';
import { Link } from 'react-router-dom';
import { useUser } from '../context/User-context'
import { useNavigate } from 'react-router-dom';

function ProfilePage() {

  const [ postData, setPostData ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const { logout } = useUser();
  const navigate = useNavigate();
  const Logout = () => logout();

  
  if(Logout){
    useEffect(() => {
      navigate('/login');
    });
  };

  useEffect(() => {

    const readUserPost = async () => {

      setLoading(true);

      try {
        const {data} = await axios.get('/api/get-user-posts')
        setPostData(data);
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
        user profile page

        <button>
          <Link to='/update-profile'> Edit </Link>
        </button>
        <button onClick={ Logout }>
          Logout
        </button>

        <CreatePost />

      {/* {loading && <h1>loading...</h1>}

      <div className='grid grid-cols-3 gap-3'>
        {postData?.map(post => (
          <PostCard 
            key={post.id}
            post={post}
            onDelete={handleDelete}
          />
        ))}
      </div> */}
    </div>
  )
}

export default ProfilePage
