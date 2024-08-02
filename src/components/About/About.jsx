import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User-context";

const About = () => {

  const { user } = useUser();
  const navigate = useNavigate();

  if(!user){
    useEffect(() => {
      navigate('/auth/login');
    })
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>Learn more about us here.</p>
    </div>
  );
};

export default About;
