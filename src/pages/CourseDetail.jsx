import React, { useEffect, useState } from "react";
import { generatePath, Link, useNavigate, useParams } from "react-router-dom";
import { courserService } from "../services/course";
import { COURSE_REGISTER_PATH, HOME_PATH } from "../constants/path";
import { currency } from "../utils/number";
import CourseAccordion from "../components/CourseAccordion/CourseAccordion";
import Teacher from "./CourseDetail/components/Teacher";
import useQuery from "../hooks/useQuery";
import { Accordion, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../store/course";
import { useCourseDetail } from "../hooks/useCourseDetail";
import Head from "../components/Head/Head";

export default function CourseDetail() {
  const { id } = useParams();
  // const [detail, setDetail] = useState({});
  const navigate = useNavigate();
  // useEffect(async () => {
  //   const res = await courserService.getDetail(id);
  //   if (res.data.data) {
  //     setDetail(res.data.data);
  //   } else {
  //     navigate(HOME_PATH);
  //   }
  // }, []);
  // const { data: detail } = useQuery(
  //   async () => {
  //     const res = await courserService.getDetail(id);
  //     if (res.data) {
  //       return res;
  //     } else {
  //       navigate(HOME_PATH);
  //     }
  //   },
  //   [],
  //   {}
  // );
  const detail = useCourseDetail(id);
  const loading = !detail?.id;
  const registerPath = generatePath(COURSE_REGISTER_PATH, {
    id,
  });
  const [accordionOpen, setAccordionOpen] = useState(-1);
  const { teacher } = detail;
  return (
    <main className="course-detail" id="main">
      <Head>
        <title>{detail.title}</title>
      </Head>
      <section
        className="banner style2"
        style={{ "--background": detail.template_color_banner }}
      >
        <div className="container">
          <div className="info">
            {detail.title ? (
              <h1>Thực Chiến {detail.title}</h1>
            ) : (
              <Skeleton variant="text" width={"100%"} height={128} />
            )}

            <div className="row">
              <div className="date">
                <strong>Khai giảng:</strong> 12/10/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
            </div>
            <Link
              to={registerPath}
              className="btn white round"
              style={{ "--color-btn": detail.template_color_btn }}
            >
              đăng ký
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="video">
              <div className="icon">
                <img src="/img/play-icon-white.png" alt="" />
              </div>
              <span>giới thiệu</span>
            </div>
            <div className="money">{currency(detail.money)} VND</div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <p className="des">{detail.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src="/img/course-detail-img.png" alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          <div className="accordion">
            <div className="accordion__title">
              <div className="date">Ngày 1</div>
              <h3>Giới thiệu HTML, SEO, BEM.</h3>
            </div>
            <div className="content">
              I'd like to demonstrate a powerful little pattern called
              “Server-Fetched Partials” that offers some tangible benefits over
              alternatives like VueJS for simple page interactions.
            </div>
          </div>
          <CourseAccordion.Group>
            {detail.content?.map((e, i) => (
              <CourseAccordion key={i} index={i + 1} {...e} />
            ))}
          </CourseAccordion.Group>
          <h3 className="title">yêu cầu cần có</h3>
          <div className="row row-check">
            {detail.required?.map((e) => (
              <div className="col-md-6">{e.content}</div>
            ))}
          </div>
          <h3 className="title">hình thức học</h3>
          <div className="row row-check">
            {detail.benefits?.map((e, i) => (
              <div key={i} index={i + 1} className="col-md-6">
                {e.content}
              </div>
            ))}
          </div>
          <h3 className="title">
            <div className="date-start">lịch học</div>
            <div className="sub">
              *Lịch học và thời gian có thể thống nhất lại theo số đông học
              viên.
            </div>
          </h3>
          <p>
            <strong>Ngày bắt đầu: </strong> {detail.opening_time}
            <br />
            <strong>Thời gian học: </strong> {detail.schedule}
          </p>
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <Teacher teacher={teacher} />
          </div>
          <h3 className="title">Người hướng dẫn</h3>
          <div className="teaches">
            {detail.mentor?.map((e) => (
              <Teacher key={e.id} teacher={e} />
            ))}
          </div>
          <div className="bottom">
            <div className="user">
              <img src="img/user-group-icon.png" alt="" />{" "}
              {detail.number_student_default}
            </div>
            <Link to={registerPath} className="btn main btn-register round">
              đăng ký
            </Link>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    React JS
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    {" "}
                    Animation{" "}
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    {" "}
                    Scss, Grunt JS và Boostrap 4{" "}
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    {" "}
                    Front-end căn bản{" "}
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Vương Đặng</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img2.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    {" "}
                    Front-end nâng cao{" "}
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src="/img/img3.png" alt="" />
                </a>
                <div className="info">
                  <a className="name" href="#">
                    {" "}
                    Laravel framework{" "}
                  </a>
                  <p className="des">
                    One of the best corporate fashion brands in Sydney
                  </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                    <div className="name">Trần Nghĩa</div>
                  </div>
                  <div className="register-btn">Đăng Ký</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
