import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Box } from "@mui/material";


const DropDown = ({ name, options, OnDropdownChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handlerChange = (event) => {
    setSelectedOption(event.target.value);
    const value = event.target.value;
    // console.log("Selected option:", event.target.value);
    OnDropdownChange(value);
  };

  return (
    <>
      <InputLabel sx={{ p: "20px", fontWeight: "800" }} required>
        {name}
      </InputLabel>
      <Box pl={"20px"} pb={"20px"}>
        <FormControl>
          <Select value={selectedOption} onChange={handlerChange} displayEmpty>
            <Box value="" disabled selected hidden>
              Select Option
            </Box>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default DropDown;
