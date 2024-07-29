import React from 'react';

const UserCard = ({ user, isFollowing, onFollowChange }) => {
  const handleFollow = () => {
    onFollowChange(!isFollowing);
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img className="w-10 h-10 rounded-full mr-4" src={user.profilePicture} alt={user.firstName} />
      <div className="text-sm">{user.firstName}</div>
      <button
        className={`ml-auto py-2 px-4 rounded-full text-sm ${
          isFollowing ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white'
        }`}
        onClick={handleFollow}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
