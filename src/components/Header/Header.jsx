import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/User-context";

const Header = () => {
  const { logout } = useUser();
  return (
    <header className="bg-gray-800 text-white py-[10px] px-8">
      <nav className="px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1 className="text-2xl font-bold">My App</h1>
          <ul className="flex flex-col items-center justify-between mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ml-20">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                Feeds
              </Link>
            </li>
            <li>
              <Link
                to="/friends"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Friends
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </Link>
            </li>
          </ul>
          <button>Logout</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
