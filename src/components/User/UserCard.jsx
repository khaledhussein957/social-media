// import React from "react";
import { useState } from "react";
import { useUser } from "../../context/User-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function UserCard({ User }) {
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const deleteAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.delete("/api/users/delete-profile");
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
    <div className="w-[359px] rounded-[4px] m-[20px] pb-[20px] bg-gray-800">
      <div className="text-[35px] text-white text-center font-semibold">
        {User.username}
      </div>
      <div className="p-[20px,40px] text-white text-center text-[16px]">
        {User.email}
      </div>
      <div className=" mt-4">
        <div className="flex gap-4">
          <button className="w-full text-white bg-green-500 dark:bg-gray-900 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <Link to="/update-profile">Edit Account</Link>
          </button>
          <button
            className="w-full text-white bg-red-500 dark:bg-gray-900 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={deleteAccount}
          >
            {loading ? "Deleting..." : "Delete Account"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
