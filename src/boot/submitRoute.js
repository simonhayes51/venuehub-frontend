import React from "react";
import ReactDOM from "react-dom/client";
import SubmitPage from "@/pages/Submit.jsx";

if (location.pathname === "/submit") {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.createRoot(root).render(React.createElement(SubmitPage));
  }
}
