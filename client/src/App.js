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
          SH - Spotify (H)Analytics
        </Typography>
      </Box>
      <Box height={100} />
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography
          variant="h4"
          noWrap
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 500,
            letterSpacing: ".01rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Hear your inner data
        </Typography>
      </Box>
    </div>
  );
};

export default App;
