import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/dest/stylelibs.min.css";
import "./assets/dest/style.min.css";
import "./assets/dest/fonts.css";
import "./assets/style/custom.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
