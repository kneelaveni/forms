import React from "react";
import InputLabel from '@mui/material/InputLabel';
import {
  TextField,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const DatePickerData = ({ name, value, setValue,onDatePickerDataChange }) => {
  const handleChange = (newValue) => {
    setValue(newValue);
    // console.log(newValue)
    const value = newValue
    onDatePickerDataChange(value);
  };
  return (
    <>
      <InputLabel sx={{p:'20px', fontWeight:'800'}} required>{name}</InputLabel>
      <Box pl={"20px"} pb={"20px"}>
        <Box pb={"20px"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          value={value}
          onChange={handleChange}
        />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  );
  
};

export default DatePickerData;
