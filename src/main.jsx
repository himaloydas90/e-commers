import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { ApiService } from "./Services/Api.js";
// import { store } from "./Redux/Store.js";

createRoot(document.getElementById("root")).render(

  <ApiProvider api={ApiService}>
    <App />
  </ApiProvider>
 
);
