import React from "react";

export default function CourseOnline() {
  return (
    <section className="section-2 section-blue">
      <div className="container">
        <div className="textbox white">
          <h3 className="sub-title">KHÓA HỌC</h3>
          <h2 className="main-title">OFFLINE</h2>
        </div>
        <div className="list row">
          <div className="col-md-4 course">
            <div className="wrap">
              <a href="#" className="cover">
                <img src="img/img6.png" alt="" />
              </a>
              <div className="info">
                <a href="#" className="name">
                  Front-end căn bản
                </a>
                <p className="des">
                  One of the best corporate fashion brands in Sydney
                </p>
              </div>
              <div className="bottom">
                <div className="teacher">
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
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
                <img src="img/img7.png" alt="" />
              </a>
              <div className="info">
                <a href="#" className="name">
                  Front-end nâng cao
                </a>
                <p className="des">
                  One of the best corporate fashion brands in Sydney
                </p>
              </div>
              <div className="bottom">
                <div className="teacher">
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
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
                <img src="img/img8.png" alt="" />
              </a>
              <div className="info">
                <a href="#" className="name">
                  Laravel framework
                </a>
                <p className="des">
                  One of the best corporate fashion brands in Sydney
                </p>
              </div>
              <div className="bottom">
                <div className="teacher">
                  <div className="avatar">
                    <img src="img/avt.png" alt="" />
                  </div>
                  <div className="name">Trần Nghĩa</div>
                </div>
                <div className="register-btn">Đăng Ký</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-deco">C</div>
      </div>
    </section>
  );
}
