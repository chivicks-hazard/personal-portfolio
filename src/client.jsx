import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import pkg from "react-router-dom";
import "./css/index.css";

const { BrowserRouter } = pkg;

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
