import { useState, useEffect } from "React";
import axios from "axios";
import UserCard from "../components/User/UserCard";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        const data = response.data;
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile page</h1>

      
      {user ? (
        <div>
          {user.map((profile) => (
            <div key={profile.id}>
            <UserCard User={user} />
          </div>
          ))}
          {/* Edit and delete buttons */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
