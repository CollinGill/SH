import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Key from "@mui/icons-material/Key";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Input,
  InputAdornment,
  Snackbar,
} from "@mui/material";

import Navbar from "../components/Navbar";

const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Invalid username",
    pass: "Invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Login authorization with Spotify and send user to home page with their stats?
    // TODO: Clear form
  };

  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <Snackbar autoHideDuration={6000} message={errorMessages.message} />
    );

  const itemSize = 10;

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing="16"
          alignItems="center"
          justify="center"
          direction="column"
          backgroundColor="#616161"
          padding={"5em"}
          sx={({ width: 1 / 2 }, { height: 1 / 2 })}
        >
          <Grid item xs={itemSize}>
            <FormControl variant="standard">
              <InputLabel>Username/Email</InputLabel>
              <Input
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={itemSize}>
            <FormControl variant="standard">
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <Key />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={itemSize}>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
