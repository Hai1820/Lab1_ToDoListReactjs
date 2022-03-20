import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const close = () => {
    document.body.classList.toggle("menu-is-show");
  };
  return (
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <NavLink to="/dang-nhap">Đăng ký / Đăng nhập</NavLink>
          </li>
          <li className="active">
            <NavLink to="/">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/thanh-vien">CFD Team</NavLink>
          </li>
          <li>
            <NavLink to="/khoa-hoc">Khóa Hoc</NavLink>
          </li>
          <li>
            <NavLink to="/hop-tac">Liên Hệ</NavLink>
          </li>
        </ul>
      </nav>
      <div onClick={close} className="overlay-nav" />
    </>
  );
}
