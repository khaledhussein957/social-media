import React from "react";
import { useUser } from "../../context/User-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DevTeam() {
  const navigate = useNavigate();
  const { user } = useUser();
  if (!user) {
    useEffect(() => {
      navigate("/auth/login");
    });
  }
  return <div>Dev Team.</div>;
}

export default DevTeam;
