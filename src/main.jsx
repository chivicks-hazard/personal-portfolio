import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import "./css/tailwind.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fontsource-variable/josefin-sans";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
