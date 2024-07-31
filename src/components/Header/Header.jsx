import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/User-context";

const Header = () => {
  const {logout} = useUser();
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My App</h1>
      <div className="flex items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
