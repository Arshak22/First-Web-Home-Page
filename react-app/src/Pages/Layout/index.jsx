import React from "react";
import {Outlet} from "react-router-dom";
import MainPicture from "../../Components/MainPictureSection";
import Footer from "../../Components/Footer";

const Layout = () => {
  return (
    <>
      <MainPicture />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;