import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TOKEN_STORAGE_KEY } from "../constants/key";
import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/auth";
import { userService } from "../services/user";
import { authLogin } from "../store/auth";

export default function Login() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const [errorMessage, setErrorMessage] = useState("");
  const btnClick = async (ev) => {
    ev.preventDefault();
    const errorObj = {};
    if (!form.username) {
      errorObj.username = "Tên người dùng là bắt buộc";
    }
    if (!form.password) {
      errorObj.username = "Mật khẩu không được bỏ trống";
    }
    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      // const message = await handleLogin(form);
      // if (message) {
      //   setErrorMessage(message);
      // }
      // const res = await authService.login(form);
      // if (res.message) {
      //   return res.message;
      // }
      // localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data));
      // const user = await userService.getInfo();
      // // setUser(user.data);
      // dispatch({ type: "auth/login", payload: user.data });
      dispatch(authLogin(form));
    }
  };
  // Sử dụng Reducer
  const { user, errorMessage } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  // Sử dụng Context
  // const { handleLogin } = useContext(AuthContext);
  if (user) return <Navigate to="/" />;
  return (
    <main className="register-course" id="Login">
      <section>
        <div className="container">
          <div className="wrap container">
            <h1 className="main-title">Đăng Nhập</h1>
            <form className="form">
              {errorMessage && <p className="error-text">{errorMessage}</p>}
              <label>
                <p>
                  Tên đăng nhập<span>*</span>
                </p>
                <input
                  value={form.username}
                  onChange={(ev) =>
                    setForm({ ...form, username: ev.target.value })
                  }
                  type="text"
                  placeholder="Tên đăng nhập"
                />
              </label>
              {errors.username && (
                <p className="error-text">{errors.username}</p>
              )}
              <label>
                <p>
                  Password<span>*</span>
                </p>
                <input
                  onChange={(ev) => (form.password = ev.target.value)}
                  type="text"
                  placeholder="Password"
                />
              </label>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
              <button className="btn main rect" onClick={btnClick}>
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}
