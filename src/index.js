import React from "react";
import { render } from "react-dom";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
