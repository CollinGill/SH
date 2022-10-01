import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/");
  };

  const navToAbout = () => {
    navigate("/about");
  };

  const navToLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography
          variant="h6"
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
          SH
        </Typography>
        <Button color="inherit" onClick={navToHome}>
          Home
        </Button>
        <Button color="inherit" onClick={navToAbout}>
          About
        </Button>
        <Button color="inherit" onClick={navToLogin}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
