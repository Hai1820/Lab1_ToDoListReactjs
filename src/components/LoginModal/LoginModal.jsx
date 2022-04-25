import { Button } from "@mui/material";
import React from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { togglePopupLogin } from "../../store/page";

export default function LoginModal() {
  const { isOpenLogin } = useSelector((store) => store.page);
  const dispatch = useDispatch();
  return reactDom.createPortal(
    <div
      className="popup-form popup-login"
      style={{ display: isOpenLogin ? "flex" : "none" }}
      onClick={() => dispatch(togglePopupLogin())}
    >
      <div className="wrap" onClick={(ev) => ev.stopPropagation()}>
        {/* login-form */}
        <div className="ct_login" style={{ display: "block" }}>
          <h2 className="title">Đăng nhập</h2>
          <input type="text" placeholder="Email / Số điện thoại" />
          <input type="password" placeholder="Mật khẩu" />
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="#" className="forget">
              Quên mật khẩu?
            </a>
          </div>
          <div className="btn rect main btn-login">đăng nhập</div>
          <div className="text-register" style={{}}>
            <strong>hoặc đăng ký bằng</strong>
          </div>
          <div>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt="" />
              Google
            </div>
          </div>
          <button
            className="close"
            onClick={() => dispatch(togglePopupLogin())}
          >
            <img src="/img/close-icon.png" alt="" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
