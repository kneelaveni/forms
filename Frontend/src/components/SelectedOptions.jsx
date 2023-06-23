import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ShortTextIcon from "@mui/icons-material/ShortText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/material";
import ShortAnswer from "./ShortAnswer";
import Paragraph from "./Paragraph";
import { useState } from "react";

const SelectedOptions = ({ onOptionChange }) => {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setOption(selectedOption);
    onOptionChange(selectedOption);
  };

  return (
    <>
      <Box>
        <Box >
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-helper"
            value={option}
            displayEmpty
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <Box value="" disabled selected hidden>
              <Box display={'flex'}>
                <ListItemIcon>
                  <ShortTextIcon />
                </ListItemIcon>
                Short answer
              </Box>
            </Box>
            <MenuItem value={"shortanswer"} >
              <Box display={"flex"}>
                <ListItemIcon>
                  <ShortTextIcon />
                </ListItemIcon>
                Short answer
              </Box>
            </MenuItem>

            <MenuItem value={"paragraph"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <FormatAlignLeftIcon />
                </ListItemIcon>
                Paragraph
              </Box>
            </MenuItem>

            <MenuItem value={"multiplechoice"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <RadioButtonCheckedIcon />
                </ListItemIcon>
                Multiple choice
              </Box>
            </MenuItem>

            <MenuItem value={"checkboxes"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <CheckBoxOutlinedIcon />
                </ListItemIcon>
                Checkboxes
              </Box>
            </MenuItem>

            <MenuItem value={"dropdown"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <ArrowDropDownCircleOutlinedIcon />
                </ListItemIcon>
                Dropdown
              </Box>
            </MenuItem>

            <MenuItem value={"fileupload"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <CloudUploadOutlinedIcon />
                </ListItemIcon>
                File upload
              </Box>
            </MenuItem>

            <MenuItem value={"linearscale"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <LinearScaleOutlinedIcon />
                </ListItemIcon>
                Linear scale
              </Box>
            </MenuItem>

            <MenuItem value={"date"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                Date
              </Box>
            </MenuItem>

            <MenuItem value={"time"}>
              <Box display={"flex"}>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                Time
              </Box>
            </MenuItem>
          </Select>
        </Box>
      </Box>
    </>
  );
};

export default SelectedOptions;
