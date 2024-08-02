import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/index.css";
import "../src/styles/timeline.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import  {theme}  from "./theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
