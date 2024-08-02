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
    <div className="mt-20px justify-center items-center">
      <h1>Profile page</h1>

      
      {user ? (
        <div>
            <UserCard User={user} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
