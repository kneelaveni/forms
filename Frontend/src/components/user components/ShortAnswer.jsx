import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';

const ShortAnswer = ({ item, onShortAnswerChange,required }) => {
  const [shortAnswerValue, setShortAnswerValue] = useState('');
  const ShortAnswerValueHandler = (event) => {
    const value = event.target.value;
    setShortAnswerValue(value);
    onShortAnswerChange(value);
  };

  return (
    <>
    <InputLabel sx={{p:'20px', fontWeight:'800'}} required={required}>{item}</InputLabel>
      <Box pb={'20px'}>
        <TextField
          id="filled-basic"
          // value={}
          key={item}
          placeholder="Your answer"
          onChange={ShortAnswerValueHandler}
          variant="standard"
          sx={{
            ".MuiInputBase-input": { width: "350px" },
            pl: "20px",
          }}
          required={required}
        />
      </Box>
    </>
  );
};

export default ShortAnswer;
