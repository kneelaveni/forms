import {React , useState} from 'react'
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Typography } from "@mui/material";

const TimePickerData = ({toggleValue}) => {
  const [TimePickerValue,setTimePickerValue] = useState('');
  const TimePickerValueHandler = (event)=>{
    setTimePickerValue(event.target.value);
   console.log(event.target.value);
  }
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} >
        <Box display={'flex'}>
          <TextField
            id="filled-basic"
            placeholder="Question"
            variant="filled"
            onChange={TimePickerValueHandler}
            sx={{
              ".MuiInputBase-input": { width: "300px" },
              pb: "20px",
            }}
          />
            {toggleValue && (
            <Typography variant="body1">
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Typography>
          )}
        </Box>
        <Box pb={"20px"} pl={'0px'}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker disabled />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  );
};

export default TimePickerData;
