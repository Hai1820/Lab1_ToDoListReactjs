import React, { useContext } from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import Course from "./Profile/ProfileCourse";
import Info from "./Profile/Info";
import Project from "./Profile/Project";
import Payment from "./Profile/Payment";
import Coin from "./Profile/Coin";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSelector } from "react-redux";
export default function Profile({ path }) {
  // const [tab, setTab] = useState(0);
  // const onClick = (e) => {
  //   e.preventDefault;
  // };
  // const login = false;
  // const { user } = useContext(AuthContext);
  const { user } = useSelector((store) => store.auth);
  const login = true;
  if (!user) return <Navigate to="/" />;
  return (
    <main className="profile" id="main">
      {!login && <Navigate to="/" />}
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src={user.avatar} alt="" />
            <div className="camera" />
          </div>
          <div className="name">{user.name}</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink to={`${path}`}>Thông tin tài khoản</NavLink>
              <NavLink to={`${path}/khoa-hoc`}>Khóa học của bạn</NavLink>
              <NavLink to={`${path}/du-an`}>Dự án đã làm</NavLink>
              <NavLink to={`${path}/thanh-toan`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Outlet />
              {/* {tab === 0 && <Info />}
              {tab === 1 && <Course />}
              {tab === 2 && <Project />}
              {tab === 3 && <Payment />}
              {tab === 4 && <Coin />} */}
              {/* Info ProfileCourse Project ProfilePayment Coin */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
