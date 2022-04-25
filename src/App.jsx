import MainLayout from "./layouts/MainLayout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Course from "./pages/Course";
import Cooperate from "./pages/Cooperate";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Info from "./pages/Profile/Info";
import ProfilePayment from "./pages/Profile/Payment";
// import "./assets/style/style.scss";
import { Route, Routes } from "react-router-dom";
import ProfileCourse from "./pages/Profile/ProfileCourse";
import Project from "./pages/Profile/Project";
import MemberProject from "./pages/MemberProject";
import ProfileCoin from "./pages/Profile/Coin";
import Page404 from "./pages/Page404";
import Coin from "./pages/Coin";
import Faq from "./pages/Faq";
import {
  COURSE_DETAIL_PATH,
  COURSE_REGISTER_PATH,
  HOME_PATH,
} from "./constants/path";
import CourseRegister from "./pages/CourseRegister/CourseRegister";
// import { useState } from "react";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path="/khoa-hoc" element={<Course />} />
          <Route path="/hop-tac" element={<Cooperate />} />
          <Route path={COURSE_DETAIL_PATH} element={<CourseDetail />} />
          <Route path={COURSE_REGISTER_PATH} element={<CourseRegister />} />
          <Route path="/thanh-toan" element={<Payment />} />
          <Route path="/ca-nhan" element={<Profile path="/ca-nhan" />}>
            <Route index element={<Info />} />
            <Route path="khoa-hoc" element={<ProfileCourse />} />
            <Route path="du-an" element={<Project />} />
            <Route path="thanh-toan" element={<ProfilePayment />} />
            <Route path="coin" element={<ProfileCoin />} />
          </Route>
          <Route path="/thanh-vien" element={<Team />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/du-an" element={<MemberProject />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/giai-dap" element={<Faq />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
