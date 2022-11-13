import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";
import PostContextProvider from "./contexts/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <PostContextProvider>
      <Router>
        <App />
      </Router>
    </PostContextProvider>
  </AuthContextProvider>
);
