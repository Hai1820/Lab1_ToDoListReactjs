import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import LoginModal from "../components/LoginModal/LoginModal";

export default function MainLayout() {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
      <LoginModal />
    </>
  );
}
