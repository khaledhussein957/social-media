import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/User-context';
import { useEffect } from 'react';

function UpdateUserForm() {

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();

  if(!user){
    useEffect(() => {
      navigate('/login');
    }, [])
  }

  const handleInputChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading(true)

    try {
      const {data} = await axios.post('/api/update-profile' , formData);
      if(data.error){
        toast.error(data.error);
        loading(false);
      } else{
        toast.success(data.message);
        setUser(null);
        navigate('/login');
        loading(false);
      }
    } catch (error) {
      console.log(error);
      loading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>firstName: </label>
        <input type="text" onChange={handleInputChange} />
        <label>lastName: </label>
        <input type="text" onChange={handleInputChange} />
        <label>email: </label>
        <input type="text" onChange={handleInputChange} />
        <label>password:</label>
        <input type="password" onChange={handleInputChange} />
        <button>{loading ? "updating..." : "update"}</button>
      </form>
    </div>
  )
}

export default UpdateUserForm
