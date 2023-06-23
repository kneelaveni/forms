import {React , useState} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

const ShortAnswer = ({ toggleValue }) => {
  const [shortAnswerValue, SetShortAnswerValue] = useState("");
  const ShortAnswerValueHandler = (event) => {
    SetShortAnswerValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <Box>
        <Box display={"flex"}>
          <TextField
            fullWidth
            id="filled-basic"
            placeholder="Question"
            onChange={ShortAnswerValueHandler}
            variant="filled"
            sx={{
              ".MuiInputBase-input": { width: "300px" },
            }}
            required={toggleValue}
          />
          {toggleValue && (
            <Typography variant="body1">
              <span style={{ color: "red", fontSize: "30px" }}>*</span>
            </Typography>
          )}
        </Box>
        <Box>
          <TextField
            fullWidth
            disabled
            id="filled-disabled"
            defaultValue="Short answer"
            variant="standard"
            sx={{
              ".MuiInputBase-input": { width: "300px" },
              pt: "20px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ShortAnswer;
