import React, { useState } from "react";
import { Typography } from "@mui/material";

import {
  FormControlLabel,
  FormControl,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import { AddCircle, Cancel } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";

const CheckBoxes = ({ toggleValue }) => {
  const [value, setValue] = useState("");

  const [checkboxValue,setCheckboxValue] = useState('');
const CheckboxValueHandler = (event)=>{
setCheckboxValue(event.target.value);
console.log(event.target.value);
}

  const [options, setOptions] = useState([
    { label: "Option 1", value: "option1", editable: true }, // Added editable property
  ]);
  const [customValue, setCustomValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCustomValueChange = (event) => {
    setCustomValue(event.target.value);
    console.log(event.target.value);
  };

  const handleOptionValueChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index].label = value;
    setOptions(updatedOptions);
    console.log(value);
  };

  const handleAddOption = () => {
    const newOption = {
      label: customValue,
      value: customValue.toLowerCase().replace(/\s+/g, "-"),
      editable: true,
    };

    setOptions([...options, newOption]);
    setCustomValue("");
  };

  const handleRemoveOption = (value) => {
    const updatedOptions = options.filter((option) => option.value !== value);
    setOptions(updatedOptions);
    // if (value === value) {
    //   setValue("");
    // }
  };

  return (
    <Box>
      <Box display={"flex"}>
        <TextField
          id="filled-basic"
          placeholder="Question"
          variant="filled"
          onChange={CheckboxValueHandler}
          sx={{
            ".MuiInputBase-input": { width: "300px" },
            // pl: "20px",
          }}
        />
         {toggleValue && (
            <Typography variant="body1">
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Typography>
          )}
      </Box>

      <Box p={"20px"} pl={'0px'} bgcolor={"white"}>
        <FormControl component="fieldset" value={value} onChange={handleChange}>
          {options.map((option, index) => (
            <div key={option.value}>
              <FormControlLabel
                value={option.value}
                control={<Checkbox />}
                label={
                  <TextField
                    sx={{
                      ".MuiInputBase-input": { width: "300px" },
                    }}
                    onFocus={(event) => {
                      event.target.select();
                    }}
                    variant="standard"
                    id={`option-label-${option.value}`}
                    value={option.label}
                    onChange={(event) =>
                      handleOptionValueChange(index, event.target.value)
                    }
                    InputProps={{
                      readOnly: !option.editable,
                    }}
                  />
                }
              />

              <IconButton onClick={() => handleRemoveOption(option.value)}>
                <Cancel />
              </IconButton>
            </div>
          ))}
          <FormControlLabel
            value="custom"
            control={<Checkbox />}
            label={
              <>
                <TextField
                  sx={{
                    ".MuiInputBase-input": { width: "300px" },
                  }}
                  variant="standard"
                  id="custom-option"
                  label="Add Option"
                  value={customValue}
                  onChange={handleCustomValueChange}
                />
                {customValue && (
                  <IconButton
                    onClick={handleAddOption}
                    sx={{ pl: "24px", pt: "15px" }}
                  >
                    <AddCircle />
                  </IconButton>
                )}
              </>
            }
          />
        </FormControl>
      </Box>
      {/* <Required/> */}
    </Box>
  );
};

export default CheckBoxes;
