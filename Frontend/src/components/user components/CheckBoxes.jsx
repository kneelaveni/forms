import React, { useState } from "react";
import { Checkbox, FormControlLabel, Box, colors } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const MultipleChoice = ({
  name,
  options,
  selectedOptions,
  setSelectedOptions,
  onCheckBoxChange,
}) => {
  const handleChange = (event) => {
    const optionValue = event.target.value;
    const isChecked = event.target.checked;

    // Update the selectedOptions state based on the checkbox change
    if (isChecked) {
      const value = [selectedOptions];
      onCheckBoxChange(value);
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionValue)
      );
    }

    // Print the selected checkbox values
    // console.log("Selected options:", value);
  };

  return (
    <>
      <InputLabel sx={{ p: "20px", fontWeight: "800"}} required>
        {name}
      </InputLabel>
      <Box pl={"20px"} pb={"20px"}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={handleChange}
                value={option}
              />
            }
            label={option}
          />
        ))}
      </Box>
    </>
  );
};

export default MultipleChoice;
