import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Success from "./success/success";
import Cancel from "./cancel/cancel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  </BrowserRouter>
);