import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
}
