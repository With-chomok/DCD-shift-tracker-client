import React from "react";
import useAuth from "../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if(!user){
     return navigate("/login", { state: { from: location } });
    
  }
  return children;
};

export default PrivateRoute;
