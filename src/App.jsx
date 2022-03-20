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
import "./assets/style/style.scss";
import { Route, Routes } from "react-router-dom";
import ProfileCourse from "./pages/Profile/ProfileCourse";
import Project from "./pages/Profile/Project";
import Coin from "./pages/Profile/Coin";
import Page404 from "./pages/Page404";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/khoa-hoc" element={<Course />} />
          <Route path="/hop-tac" element={<Cooperate />} />
          <Route path="/khoa-hoc/:slug" element={<CourseDetail />} />
          <Route path="/thanh-toan" element={<Payment />} />
          <Route path="/ca-nhan" element={<Profile path="/ca-nhan" />}>
            <Route index element={<Info />} />
            <Route path="khoa-hoc" element={<ProfileCourse />} />
            <Route path="du-an" element={<Project />} />
            <Route path="thanh-toan" element={<ProfilePayment />} />
            <Route path="coin" element={<Coin />} />
          </Route>
          <Route path="/thanh-vien" element={<Team />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
