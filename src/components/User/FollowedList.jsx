// components/FollowerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowerList = ({ userId }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`/api/${userId}/followers`);
        setFollowers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowers();
  }, [userId]);

  return (
    <ul>
      {followers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default FollowerList;