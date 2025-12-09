import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import img from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl  mx-auto">
      <Logo></Logo>
      <div className="flex flex-col md:flex-row justify-center items-center ">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img className="md:w-[435px]" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
