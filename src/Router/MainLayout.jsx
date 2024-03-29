import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";

const MainLayout = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 ">

      <Header />
      </div>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
