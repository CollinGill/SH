import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Key from "@mui/icons-material/Key";

import Navbar from "../components/Navbar";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

const Login = () => {
  return (
    <div>
      <Navbar />
      <Box height={100} />
      <Box
        backgroundColor={"#616161"}
        border={2}
        borderColor={"black"}
        borderRadius={16}
        width={400}
        height={500}
        margin={"auto"}
      >
        <form>
          <Grid
            container
            spacing={3}
            paddingLeft={10}
            paddingTop={10}
            direction={"column"}
          >
            <Grid item xs>
              <FormControl>
                <InputLabel>Username / Email</InputLabel>
                <Input
                  id={"uname"}
                  startAdornment={
                    <InputAdornment position={"start"}>
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  id={"uname"}
                  type={"password"}
                  startAdornment={
                    <InputAdornment position={"start"}>
                      <Key />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default Login;
