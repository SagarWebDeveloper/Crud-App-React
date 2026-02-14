import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/": return "Home";
      case "/view": return "View";
      case "/update": return "Update";
      case "/delete": return "Delete";
      default: return "";
    }
  };

  return (
    <div className="container mt-3">
      <div className="border border-bottom-0 rounded-top p-3">
        <Navbar />
        <h2 className="text-center my-3">{getTitle()}</h2>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
