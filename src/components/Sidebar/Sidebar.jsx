import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  return (
    <aside className="bg-sky-600 text-white p-4">
      <h2 className="text-lg font-bold mb-4">User Profile</h2>
      <ul>
        <li>
          <Link to="/profile" className=" hover:text-gray-900">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/contact" className=" hover:text-gray-900">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/developer-team" className=" hover:text-gray-900">
            Developer Team
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;