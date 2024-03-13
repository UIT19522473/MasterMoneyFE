import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <ToastContainer /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;