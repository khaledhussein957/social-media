import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 text-xl font-bold">My App</div>
      <nav className="mt-6">
        <ul>
          <li>
            <Link to="/" className="block p-4 hover:bg-gray-700">Home</Link>
          </li>
          <li>
            <Link to="/friends" className="block p-4 hover:bg-gray-700">Friends</Link>
          </li>
          <li>
            <Link to="/profile" className="block p-4 hover:bg-gray-700">profile</Link>
          </li>
          <li>
            <Link to="/about" className="block p-4 hover:bg-gray-700">About</Link>
          </li>
          <li>
            <Link to="/contact" className="block p-4 hover:bg-gray-700">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
