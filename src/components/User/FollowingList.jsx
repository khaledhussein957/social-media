// components/FollowingList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowingList = ({ userId }) => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const response = await axios.get(`/api/${userId}/following`);
        setFollowing(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowing();
  }, [userId]);

  return (
    <ul>
      {following.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FollowingList;