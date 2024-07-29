import React, { useState } from "react";
import { useUser } from "../../context/User-context";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const { login, user } = useUser();

  // useEffect(() => {
  //   if (user) navigate('/');
  // }, [user]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", f);
      const data = await response.json();
      if (data.message === "Logged in successfully") {
        // login(data.token, 3600000); // Login with 1 hour expiration
        toast.success("Logged in successfully!");
        setLoading(false);
        navigate("/");
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (error) {
      toast.error("Login failed!");
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in href your account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email:
                </label>
                <div>
                  <input
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                    type="text"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                </div>
                <div>
                  <input
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <button className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  {loading ? "Login..." : "Login"}
                </button>
                <p className="text-sm pt-3 font-light text-gray-500 dark:text-gray-400">
                  Create new Account{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
