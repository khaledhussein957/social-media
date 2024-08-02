import { useState, useEffect } from "React";
import axios from "axios";
import UserCard from "../components/User/UserCard";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/users/me");
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-center">Profile page</h1>

      
      {user ? (
        <div>
            <UserCard User={user} />
        </div>
      ) : (
        <div className="text-center"><p>Loading...</p></div>
      )}
    </div>
  );
}

export default Profile;
