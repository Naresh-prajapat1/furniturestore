import React from "react";
import NavBar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default LayOut;
