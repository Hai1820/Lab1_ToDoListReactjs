import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const btnClick = (ev) => {
    ev.preventDefault();
    const errorObj = {};
    if (!form.username) {
      errorObj.username = "Tên người dùng là bắt buộc";
    }
    if (!form.phone) {
      errorObj.phone = "Số điện thoại là bắt buộc";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObj.phone = "Số điện thoại không đúng định dạng";
    }
    if (!form.email) {
      errorObj.email = "Email là bắt buộc";
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(form.mail)) {
      errorObj.email = "Email không đúng định dạng";
    }
    if (!form.url) {
      errorObj.url = "Facebook là bắt buộc";
    }
    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      alert("Success");
    }
  };

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <form className="form">
              <label>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  value={form.username}
                  onChange={(ev) =>
                    setForm({ ...form, username: ev.target.value })
                  }
                  type="text"
                  placeholder="Họ và tên bạn"
                />
              </label>
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
              <label>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  onChange={(ev) => (form.phone = ev.target.value)}
                  type="text"
                  placeholder="Số điện thoại"
                />
              </label>
              {errors.phone && <p className="error-text">{errors.phone}</p>}
              <label>
                <p>
                  Email<span>*</span>
                </p>
                <input
                  onChange={(ev) => (form.email = ev.target.value)}
                  type="text"
                  placeholder="Email của bạn"
                />
              </label>
              {errors.email && <p className="error-text">{errors.email}</p>}
              <label>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  onChange={(ev) => (form.url = ev.target.value)}
                  type="text"
                  placeholder="https://facebook.com"
                />
              </label>
              {errors.url && <p className="error-text">{errors.url}</p>}
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label>
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  onChange={(ev) => (form.note = ev.target.value)}
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
              </label>
              <button className="btn main rect" onClick={btnClick}>
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
