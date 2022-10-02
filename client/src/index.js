import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./login/index";
import About from "./about/index";
import Profile from "./profile/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    ),
  },
  {
    path: "/login",
    element: (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <About />
      </ThemeProvider>
    ),
  },
  {
    path: "/profile",
    element: (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Profile />
      </ThemeProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
