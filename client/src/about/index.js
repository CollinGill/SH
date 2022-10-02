import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Box height={100} />
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Typography
          noWrap
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 300,
            letterSpacing: ".01rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          SH can tell you your top tracks and artists for a recent, medium, or
          long range of time.
        </Typography>
      </Box>
    </div>
  );
};

export default About;
