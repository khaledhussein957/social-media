import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User-context";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { user } = useUser();
  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
    });
  }
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input type="text" onChange={handleChange}/>
        <label htmlFor="">email</label>
        <input type="email" onChange={handleChange}/>
        <label htmlFor="">message</label>
        <textarea type="text" onChange={handleChange}/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
