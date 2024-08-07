import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster toastOptions={{duration: 1000}}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
