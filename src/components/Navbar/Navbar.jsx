import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, UserIcon  } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
        <Link className="text-lg font-bold">
          Friends
        </Link>
        <div className="flex items-center">
          <BellIcon className="w-6 h-6 text-gray-600" />
          <div className="relative">
            <UserIcon className="w-6 h-6 text-gray-600" />
            <div className="absolute top-0 right-0 bg-white p-2 shadow-md">
              <ul>
                <li>
                  <Link className="text-gray-600 hover:text-gray-900">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-600 hover:text-gray-900">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;