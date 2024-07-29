// HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    // fetch followed user feeds from API
    const fetchFeeds = async () => {
      const response = await fetch('/api/feeds');
      const data = await response.json();
      setFeeds(data);
    };
    fetchFeeds();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-4">Followed User Feeds</h2>
      <ul>
        {feeds.map((feed) => (
          <li key={feed.id}>
            <Link to={`/feeds/${feed.id}`} className="text-gray-600 hover:text-gray-900">
              {feed.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;