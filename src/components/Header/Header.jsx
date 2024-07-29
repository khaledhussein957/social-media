import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../UserDropdown/UserInfo'
import { useUser } from '../../context/User-context';

const Header = () => {
  const { user } = useUser();

  return (
    <header className="bg-sky-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
        <Link to="/friends" className="text-lg font-bold">
          Friends
        </Link>
        <Link to="/notifications" className="text-lg font-bold">
          Notifications
        </Link>
        {user && (
          <div className="flex items-center">
            <UserInfo />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;