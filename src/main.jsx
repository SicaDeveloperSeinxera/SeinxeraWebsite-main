import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./component/ScrollToTop.jsx";
import "./component/i18n.js"; // Import i18n configuration

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
 
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  </StrictMode>
);
