import React from 'react'
import { Box } from "@mui/material";
import SelectedOptions from "./SelectedOptions";
import MultipleChoice from "./MultipleChoice";
import { useState } from "react";
import ShortAnswer from "./ShortAnswer";
import Paragraph from "./Paragraph";
import CheckBoxes from "./CheckBoxes";
import DropDown from "./DropDown";
import FileUploader from "./FileUploader";
import LinearScale from "./LinearScale";
import DatePickerData from "./DatePickerData";
import TimePickerData from "./TimePickerData";
import { useTheme} from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

const AddForm = ({toggleValue}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (option) => {
      setSelectedOption(option);
      console.log(option);
    };
  return (
    <>
    <Box
          width={isMediumScreen ? "60%" :isSmallScreen ? "100%" : "40%"}
          margin={"auto"}
          px={'10px'}
          pr={"5px"}
          mt={"10px"}
          pt={"10px"}
          bgcolor={'white'}
          textAlign={"left"}
          sx={{borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={isMediumScreen ? "column" :isSmallScreen ? "column" : "row"}
            // flexDirection={'row'}
          >
          
            <Box textAlign={"left"}>
              {(selectedOption === "" || selectedOption === "shortanswer") && (
                <ShortAnswer toggleValue={toggleValue}/>
              )}
              {selectedOption === "paragraph" && <Paragraph toggleValue={toggleValue}/>}
              {selectedOption === "multiplechoice" && <MultipleChoice toggleValue={toggleValue}/>}
              {selectedOption === "checkboxes" && <CheckBoxes toggleValue={toggleValue}/>}
              {selectedOption === "dropdown" && <DropDown toggleValue={toggleValue}/>}
              {selectedOption === "fileupload" && <FileUploader toggleValue={toggleValue}/>}
              {selectedOption === "linearscale" && <LinearScale toggleValue={toggleValue}/>}
              {selectedOption === "date" && <DatePickerData toggleValue={toggleValue}/>}
              {selectedOption === "time" && <TimePickerData toggleValue={toggleValue}/>}
            </Box>
            <SelectedOptions onOptionChange={handleOptionChange} />
          </Box>
         
        </Box>
    

    </>
  )
}

export default AddForm;