import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User-context";

function Contact () {

  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    useEffect(() => {
      navigate('/auth/login');
    });
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <p>Get in touch with us!</p>
    </div>
  );
}

export default Contact;
