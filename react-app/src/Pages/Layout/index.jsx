import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../Components/MainPictureSection";
import Footer from "../../Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;