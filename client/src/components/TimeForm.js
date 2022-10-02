import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";

const TimeForm = (props) => {
  // props.type := songs or artists
  const handleChange = () => {
    // Update list
  };

  return (
    <Box width={400}>
      <FormControl fullWidth>
        <InputLabel id={"timeRange"} hidden={"false"}>
          Time Range
        </InputLabel>
        <Select id={"timeSelect"} onChange={handleChange} fullWidth>
          <MenuItem value={"medium_term"}>Past 4-6 months</MenuItem>
          <MenuItem value={"short_term"}>Past 4 weeks</MenuItem>
          <MenuItem value={"long_term"}>Past several years</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TimeForm;
