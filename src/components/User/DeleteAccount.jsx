import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User-context";
import { useEffect } from "react";

const DeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
    }, []);
  }

  const handleSubmit = async () => {
    // ensure if user want to delete the Account
    if(!confirm("Are you sure!")) return;

    try {
      const { data } = await axios.delete("/api/delete-profile");
      console.log(data);
      toast.success(data.message);
      setUser(null);
      setLoading(false);
      navigate("/auht/login");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <button onClick={handleSubmit}>
        {loading ? "Deleting..." : "Delete Account"}
      </button>
    </div>
  );
};

export default DeleteAccount;
