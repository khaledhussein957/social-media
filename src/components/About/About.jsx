import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User-context";
import toast from "react-hot-toast";

const About = () => {

  const { user } = useUser();
  const navigate = useNavigate();

  if(!user){
    useEffect(() => {
      navigate('/auth/login');
      toast.error('Please Login!');
    },[]);
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>Learn more about us here.</p>
    </div>
  );
};

export default About;
