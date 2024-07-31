import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 flex flex-col">
      <div className="flex-grow p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="py-2"><Link to='/contact' > Contac us </Link></li>
          <li className="py-2"><Link to='/about' > Abaut us </Link></li>
          <li className="py-2"><Link to='/devTeam' > Dev Team </Link></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
