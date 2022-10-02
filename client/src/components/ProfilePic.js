import { Box } from "@mui/material";

const ProfilePic = (props) => {
  return (
    <Box borderRadius={"50%"} borderColor={"#616161"} border={2}>
      <img
        src={props.url}
        alt={"User profile picture"}
        height={400}
        width={400}
      />
    </Box>
  );
};

export default ProfilePic;
