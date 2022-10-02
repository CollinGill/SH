import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";
import ProfilePic from "../components/ProfilePic";
import ProfileSub from "../components/ProfileSub";
import TimeForm from "../components/TimeForm";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid
          item
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <Box height={100} />
          <ProfilePic url={"https://rustacean.net/assets/cuddlyferris.png"} />
          <ProfileSub name={"Collin Gillespie"} />
        </Grid>
        <Grid
          item
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <TimeForm type="songs" />
        </Grid>
        <Grid
          item
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <TimeForm type="artists" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
