// FriendsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FriendsPage = () => {
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState({});

  useEffect(() => {
    // fetch all users from API
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();

    // fetch following status from API
    const fetchFollowing = async () => {
      const response = await fetch('/api/following');
      const data = await response.json();
      setFollowing(data);
    };
    fetchFollowing();
  }, []);

  const handleFollow = (userId) => {
    // update following status in API
    const updateFollowing = async () => {
      const response = await fetch(`/api/following/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ following: !following[userId] }),
      });
      const data = await response.json();
      setFollowing(data);
    };
    updateFollowing();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-