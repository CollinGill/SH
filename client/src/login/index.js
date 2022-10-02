import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Temp until OAUTh
  const navigate = useNavigate();
  const navToProfile = () => {
    navigate("/profile");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: backend connection
  };

  return (
    <div>
      <Navbar />
      <Box height={100} />
      <Box
        backgroundColor={"#616161"}
        border={2}
        borderColor={"black"}
        borderRadius={16}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={400}
        height={500}
        margin={"auto"}
      >
        <Box>
          <Button
            type="submit"
            variant="contained"
            size="large"
            onSubmit={handleSubmit}
            onClick={navToProfile}
          >
            <Typography
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Login
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
