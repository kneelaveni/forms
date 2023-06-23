import {React , useState} from 'react'
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import {
  TextField,
  Select,
  Box,
} from "@mui/material";
const LinearScale = ({toggleValue}) => {
  const [range, SetRange] = useState("1");
  const [linearScaleValue,setLinearScaleValue] = useState('');
 const LinearScaleValueHandler = (event)=>{
  setLinearScaleValue(event.target.value);
  console.log(event.target.value);
 }
  const [secondRange, SetSecondRange] = useState("5");
  const handleChange = (event) => {
    SetRange(event.target.value);
    // console.log(event.target.value);
  };

  const secondHandleChange = (event) => {
    SetSecondRange(event.target.value);
    console.log(event.target.value);
  };
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box display={'flex'}>
          <TextField
            id="filled-basic"
            placeholder="Question"
            variant="filled"
            onChange={LinearScaleValueHandler }
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
        <Box display={"flex"} m={"20px"} ml={'0px'}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={range}
            onChange={handleChange}
            displayEmpty
          >
            {/* <option value="" disabled selected hidden>
              1
            </option> */}
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
          </Select>
          <Box p={"20px"}>to</Box>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={secondRange}
            onChange={secondHandleChange}
            displayEmpty
          >
            {/* <option value="" disabled selected hidden>
              5
            </option> */}
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </Box>
        <Box padding={"20px"} pl={'0px'} pb={"0px"} display={"flex"}>
          <Box pt={"5px"} color={"gray"}>
            {range}
          </Box>
          <TextField
            sx={{ pl: "20px" }}
            placeholder="Label(optional)"
            id="standard-error"
            variant="standard"
          />
        </Box>
        <Box padding={"20px"} pl={'0px'} pt={"10px"} display={"flex"}>
          <Box pt={"5px"} color={"gray"}>
            {secondRange}
          </Box>
          <TextField
            sx={{ pl: "20px" }}
            placeholder="Label(optional)"
            id="standard-error"
            variant="standard"
          />
        </Box>
      </Box>
    </>
  );
};

export default LinearScale;
