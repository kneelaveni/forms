import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';

const Paragraph = ({item, onParagraphChange}) => {
    const [LongAnswerValue,SetLongAnswerValue] = useState('');
    const LongAnswerValueHandler = (event)=>{
     const value=event.target.value;
     SetLongAnswerValue(event.target.value);
     onParagraphChange(value);
    //  console.log(event.target.value);
    }
    
  return (
    <>
    <InputLabel sx={{p:'20px', fontWeight:'800'}} required>{item}</InputLabel>
      <Box display={"flex"} pb={'20px'}>
        <TextField
          id="filled-basic"
          placeholder="Your answer"
          onChange={LongAnswerValueHandler}
          variant="standard"
          sx={{
            ".MuiInputBase-input": { width: "700px" },
            pl: "20px",
          }}
        />
      </Box>
    </>
  );
};

export default Paragraph;
