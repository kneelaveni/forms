import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel} from "@mui/material";
import { Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

const MultipleChoice = ({ name, options ,OnMultiplechoiceChange }) => {

  const handlerChange = (event) => {
    const value = event.target.value;
    // console.log("Selected option:", event.target.value);
    OnMultiplechoiceChange(value);
  };

  return (
    <>
       <InputLabel sx={{p:'20px', fontWeight:'800'}} required>{name}</InputLabel>
      <Box pl={"20px"} pb={"20px"}>
        <RadioGroup name="options" onChange={handlerChange}>
          
        {options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
    
        </RadioGroup>
      </Box>
    </>
  );
};
export default MultipleChoice;
