// components/FollowButton.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowButton = ({ userId, isFollowing }) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollow = async () => {
    try {
      await axios.post(`/api/${userId}/follow`);
      setFollowing(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.post(`/api/${userId}/unfollow`);
      setFollowing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={following ? handleUnfollow : handleFollow}>
      {following ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;