import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./styles/main.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

ReactDOM.render(<App />, document.getElementById("app"));
