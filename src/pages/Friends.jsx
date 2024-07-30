import React from 'react'
import SearchBar from '../components/Searchbar/Searchbar'
import { useUser } from '../context/User-context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Friends() {

  const { user } = useUser();
  const navigate = useNavigate();

  if(!user){
    useEffect(() => {
      navigate('/login');
    })
  }

  return (
    <div>
      Friends page
      <SearchBar />
    </div>
  )
}

export default Friends
