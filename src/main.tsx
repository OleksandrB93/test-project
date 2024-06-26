import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalStyle from "./components/globalStyles.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ GlobalStyle }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
