import React from "react";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import InputLabel from '@mui/material/InputLabel';

const TimePickerData = ({ name, value, setValue ,onTimePickerDataChange }) => {
  const handleTimeChange = (time) => {
    const value = time;
    setValue(time);
    // console.log(time)
    onTimePickerDataChange(value);
  };
  return (
    <>
     <InputLabel sx={{p:'20px', fontWeight:'800'}} required>{name}</InputLabel>
      <Box pl={"20px"} pb={"20px"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={value}
            onChange={handleTimeChange}
          />
          </LocalizationProvider>
        </Box>
    </>
  );
};

export default TimePickerData;


