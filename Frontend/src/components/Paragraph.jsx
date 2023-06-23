import {React , useState} from 'react'
import { TextField, Box, Typography } from "@mui/material";
const Paragraph = ({ toggleValue }) => {
  const [paragraphValue,setparagraphValue] = useState('');
const paragraphValueHandler = (event)=>{
setparagraphValue(event.target.value);
console.log(event.target.value);
 }
  return (
    <>
      <Box>
        <Box display={"flex"}>
          <TextField
            fullWidth
            id="filled-basic"
            placeholder="Question"
            variant="filled"
            onChange={paragraphValueHandler }
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
        <Box>
          <TextField
            disabled
            fullWidth
            id="filled-disabled"
            defaultValue="Long answer"
            variant="standard"
            sx={{
              ".MuiInputBase-input": { width: "300px" },
              pt: "20px",
            }}
          />
        </Box>
      </Box>

      {/* <Required /> */}
    </>
  );
};

export default Paragraph;
