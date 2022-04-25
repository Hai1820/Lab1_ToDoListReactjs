import React from "react";
import { Link } from "react-router-dom";

export default function Action() {
  return (
    <section className="section-action">
      <div className="container">
        <h3>
          Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
        </h3>
        <Link to="/" className="btn main round bg-white">
          Đăng ký
        </Link>
      </div>
    </section>
  );
}
