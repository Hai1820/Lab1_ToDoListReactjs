import React from "react";
import { generatePath, Link } from "react-router-dom";
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH } from "../constants/path";

export default function CourseCard({
  thumbnail,
  title,
  short_description,
  teacher,
  slug,
  id,
}) {
  const detailPath = generatePath(COURSE_DETAIL_PATH, {
    slug,
    id,
  });
  const registerPath = generatePath(COURSE_REGISTER_PATH, {
    id,
  });
  return (
    <div className="col-md-4 course gray">
      <div className="wrap">
        <Link className="cover" to={detailPath}>
          <img src={thumbnail.link} alt="" />
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="img/icon-user-white.svg" alt="" />
                12
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> 100
              </div>
            </div>
            <div className="share">
              <img src="img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <Link to={detailPath} className="name">
            {title}
          </Link>

          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher.avatar.link} alt="" />
            </div>
            <div className="name">{teacher.title}</div>
          </div>
          <Link to={registerPath} className="register-btn">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}
