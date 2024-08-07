import { useUser } from "../../context/User-context";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function DevTeam() {
  const navigate = useNavigate();
  const { user } = useUser();
  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
      toast.error('Please Login!');
    });
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>Developer Team</p>
    </div>
  )
}

export default DevTeam;
