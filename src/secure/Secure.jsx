// src/auth.js
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children }) => {
  const userData = localStorage.getItem("user");
  if (userData) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AuthMiddleware;