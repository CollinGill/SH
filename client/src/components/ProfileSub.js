import { Box, Typography } from "@mui/material";

const ProfileSub = (props) => {
  return (
    <Box paddingTop={10}>
      <Typography
        variant="h5"
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
        {props.name}
      </Typography>
    </Box>
  );
};

export default ProfileSub;
