import React from 'react'
import CreatePost from '../components/Posts/CreatePost'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/User-context';
import { useEffect } from 'react';

function Home() {

  const { user } = useUser();
  const navigate = useNavigate();

  if(!user){
    useEffect(() => {
      navigate('/login');
    })
  }

  return (
    <div>
      Home page
      <CreatePost />
    </div>
  )
}

export default Home
