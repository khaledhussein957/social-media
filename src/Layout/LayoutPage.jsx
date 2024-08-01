import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { useUser } from "../context/User-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LayoutPage() {

  const {user} =useUser();
  const navigate = useNavigate();
  if(!user){
    useEffect(() => {
      // navigate('/auth/login')
    }, []);
  }

  return (
    <div className="">
      <div>
      <Header />
      </div>
      <div className="flex-1 p-8 mt-20">
          <Sidebar />
          {/* <menu className="mt-16">
            
          </menu> */}
      </div>
    </div>
  );
}

export default LayoutPage;
