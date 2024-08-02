import React from 'react'
import { useState } from 'react';
import { useUser } from '../../context/User-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserCard({ User }) {

  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const {setUser} = useUser();

  const deleteAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.delete("/api/users/delete-profile");
      console.log(data);
      toast.success(data.message);
      setUser(null);
      setLoading(false);
      navigate("/auht/login");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };





  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg">{User.username}</h2>
      <p className="text-gray-600">{User.email}</p>

      <Link to='/update-profile'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Edit Account </button></Link>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={deleteAccount}> {loading ?"Deleting..." :"Delete Account"} </button>
    </div>
  )
}

export default UserCard
