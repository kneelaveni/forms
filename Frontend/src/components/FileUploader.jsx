import { TextField } from "@mui/material";
import {React,useState} from "react";
import {Box} from "@mui/material";
import { Typography } from "@mui/material";
const FileUploader =({ toggleValue })=> {
  const [File,SetFile]=useState('');
  const fileHandler =(event)=>{
    SetFile(event.target.value);
    console.log(event.target.value);
  }
  
  return (
    <>
    <Box>
    <Box display={"flex"} >
            <TextField
              id="filled-basic"
              placeholder="Question"
              variant="filled"  
              onChange={fileHandler}
              sx={{
                ".MuiInputBase-input": { width: "300px" },
              }}
            />
            {toggleValue && (
            <Typography variant="body1">
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Typography>
          )}
        </Box>
        <Box pt={'20px'} pb={'20px'}>
        <TextField
        disabled
        type="file" sx={{
                ".MuiInputBase-input": { width: "300px" },
       
              }}/>
        </Box>
    </Box>
      
    </>
  )
}
export default FileUploader;