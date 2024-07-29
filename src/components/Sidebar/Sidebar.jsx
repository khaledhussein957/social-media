// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">User Profile</h2>
      <ul>
        <li>
          <Link to="/profile" className="text-gray-600 hover:text-gray-900">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/friends" className="text-gray-600 hover:text-gray-900">
            Friends
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;