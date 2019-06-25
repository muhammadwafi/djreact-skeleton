import React from "react";
import ReactDOM from "react-dom";
// Bootstrap 4.3.1
import "bootstrap/dist/css/bootstrap.min.css";
// Pages
import Main from "./components/main/Main";
import "./index.scss";
// Service Worker
import serviceWorker from "./service-worker";

ReactDOM.render(<Main />, document.getElementById("app"));
serviceWorker();
