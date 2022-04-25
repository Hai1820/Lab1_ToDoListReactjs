import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/dest/stylelibs.min.css";
import "./assets/dest/style.min.css";
import "./assets/dest/fonts.css";
import "./assets/style/custom.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <AutProvider> */}
        <App />
        {/* </AutProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
