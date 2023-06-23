import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

const LinearScale = ({ name, options, value, linearValue,onLinearScaleChange }) => {
  const handlerChange = (event, newValue) => {
    const value = event.target.value;
    linearValue(newValue);
    // console.log("linear options:", event.target.value);
    onLinearScaleChange(value);
  };

  return (
    <div>
      <InputLabel sx={{p:'20px', fontWeight:'800'}} required>{name}</InputLabel>
      <Box pl={"20px"} pb={"20px"}>
        <RadioGroup
          aria-labelledby="rating-label"
          value={value}
          onChange={handlerChange}
          row
        >
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
    </div>
  );
};

export default LinearScale;

