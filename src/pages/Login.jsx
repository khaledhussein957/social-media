import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/User-context";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { user , login } = useUser();

  const handleInputChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  if(user){
    useEffect(() => {
      navigate('/');
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/login-user", formData);
      if (data.error) {
        toast.error(data.error);
      } else {
        login(data, data.token.expiresIn);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>email: </label>
        <input type="text" onChange={handleInputChange} />
        <label>password:</label>
        <input type="password" onChange={handleInputChange} />
        <button>submit</button>
        <Link to='/register' > Create new Account</Link>
      </form>
    </div>
  );
}

export default Login;
