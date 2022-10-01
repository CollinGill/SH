import React from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "./components/Navbar";

const pages = ["Home", "About", "Login"];

const App = () => {
  return (
    <div>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="4em"
      >
        <Typography
          variant="h1"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Spotify Analytics
        </Typography>
      </Box>
    </div>
  );
};

export default App;
