import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/User-context';
import { useEffect } from 'react';

function Notification() {

  const { user } = useUser();
  const navigate = useNavigate();

  if(!user){
    useEffect(() => {
      navigate('/auth/login');
    })
  }

  return (
    <div>
      Notification page
    </div>
  )
}

export default Notification
