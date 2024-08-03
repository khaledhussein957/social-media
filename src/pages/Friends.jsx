import React from "react";
import SearchBar from "../components/Searchbar/Searchbar";
import { useUser } from "../context/User-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import UserCard from "../components/User/UserCard";

function Friends() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
      toast.error('Please Login!');
    });
  }

  useEffect(()=>{
    const fetchUsers = async () => {
  
      try {
        const { data } = await axios.get("/api/users/all-user");
        console.log(data)
  
        if (data.error) {
          toast.error(data.error);
        }
  
        setUserInfo(data);
        setLoading(false);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchUsers();
  })

  return (
    <div className="p-6">
      <h2>All Users</h2>
      <SearchBar />

      <div>
        {userInfo ? (
          <div>
            {userInfo.map((users) => (
              <div key={users.id}>
                <UserCard User={userInfo} />
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Friends;
