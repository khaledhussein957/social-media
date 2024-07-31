import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User-context";

function About() {
  const navigate = useNavigate();
  const { user } = useUser();
  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
    });
  }
  return <div>About us</div>;
}

export default About;
