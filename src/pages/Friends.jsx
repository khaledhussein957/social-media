import React from 'react'
import SearchBar from '../components/Searchbar/Searchbar'
import { useUser } from '../context/User-context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

function Friends() {

  const [ userInfo, setUserInfo ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  if(!user){
    useEffect(() => {
      navigate('/login');
    })
  }

  const getFollowing = async (e) => {
    e.preventDefault();
    loading(true);

    try {
      const {data} = await axios.get('/api/following');
      
      if(data.error){
        toast.error(data.error);
        loading(false);
      }

      setUserInfo(data);
      loading(false);

    } catch (error) {
      toast.error(error);
      loading(false);
    }
  }

  return (
    <div>
      {userInfo && (
        
        <h3>Friends page</h3>,
        <SearchBar />,
        getFollowing()

      )
      
      }
    </div>
  )
}

export default Friends
