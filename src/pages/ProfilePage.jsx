import { useState, useEffect } from "React";
import axios from "axios";
import UserCard from "../components/User/UserCard";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../context/User-context";

function Profile() {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
      toast.error("Please Login!");
    }, []);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/users/me");
        console.log(data);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-center">Profile page</h1>

      {loading && <h1 className="text-center">Loading...</h1>}

      <div className="justify-center items-center flex">
        <UserCard User={user} />
      </div>
    </div>
  );
}

export default Profile;
