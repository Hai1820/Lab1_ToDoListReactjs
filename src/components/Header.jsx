import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../constants/path";
import { AuthContext } from "../context/AuthContext";
import { authLogout } from "../store/auth";
import { togglePopupLogin } from "../store/page";

export default function Header() {
  // const { user, handleLogout } = useContext(AuthContext);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };
  const isOpenLogin = (ev) => {
    ev.preventDefault();
    dispatch(togglePopupLogin());
  };
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={toggleMenu}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to={HOME_PATH} className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {user ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">{user.name}</div>
                  <div className="avatar">
                    <img src={user.avatar} alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <a href="#">Khóa học của tôi</a>
                <a href="#">Thông tin tài khoản</a>
                <a href="#" onClick={() => dispatch(authLogout())}>
                  Đăng xuất
                </a>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <Link
                to="/dang-nhap"
                onClick={isOpenLogin}
                className="btn-register"
              >
                Đăng nhập
              </Link>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
