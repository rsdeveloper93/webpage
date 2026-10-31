
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink [&_img]:cursor-pointer [&_img]:transition-transform [&_img]:duration-300 [&_button]:cursor-pointer [&_button]:transition-transform [&_button]:duration-300 [&_button]:active:scale-95">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
