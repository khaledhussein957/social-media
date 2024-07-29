import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';

const FriendsPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId'); // Get user ID from localStorage

  useEffect(() => {
    const fetchFriends = async (userId) => {
      try {
        const data = await axios.get(`${BASE_URL}/following`, { params: { userId } });
        setUsers(data);
      } catch (error) {
        console.error('Error fetching friendships:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  const handleFollowChange = (isFollowing) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === userId ? { ...user, isFollowing } : user))
    );
  };

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="text-center py-16">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} isFollowing={user.isFollowing} onFollowChange={handleFollowChange} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
