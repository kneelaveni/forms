import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Button from "@mui/material/Button";
import FormTitle from "./FormTitle";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import useMediaQuery from "@mui/material/useMediaQuery";
const MyComponent = styled("div")({
  // textAlign: "center",
  // margin: "auto",
  paddingTop: "10px",
  // paddingLeft: "10px",
  paddingRight: "10px",
  width: "100%",
});

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [title, setTitle] = useState("untitled");
  const [description,setDescription] = useState('')
  const [eyeDisplay,setEyeDisplay] = useState(false);

  const changePage =()=>{
    setEyeDisplay(!eyeDisplay)
  }
  
  const handleSubmit = async (event)=>{
    event.preventDefault();
    await axios.post('http://localhost:8081/',{title:title,description:description})
    .then(res => console.log(res))
    .catch(err => console.log(err));
    console.log(title);
    console.log(description);
  }

  return (
    <div>
      {/* <form onSubmit ={handleSubmit}> */}
      <form>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"10vh"}
        bgcolor={"white"}
        lineHeight={"10vh"}
      >
        <Box
          width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
          display={"flex"}
        >
          <Box mt={"10px"} ml={"10px"}>
            <FormatListBulletedIcon
              sx={{
                mr: "10px",
                color: "white",
                bgcolor: "#1565C0",
                px: "5px",
                py: "7px",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box mt={"30px"}>
            <FormTitle value={title} onChange={(e)=>setTitle(e.target.value)} />
          </Box>
        </Box>

        <Box display={"flex"}>
          <Box mt={"10px"}>
            {!eyeDisplay ? <Link to ="http://localhost:3000/user">< RemoveRedEyeOutlinedIcon onClick={changePage} sx={{ cursor: "pointer" }}  /> </Link>: <Link >< VisibilityOffOutlinedIcon onClick={changePage} sx={{ cursor: "pointer" }}  /></Link> }
          </Box>
          <Box>
            <Button variant="contained" sx={{ mx: "10px" }} type = 'submit'>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
      <Box bgcolor={'#1565C0'} height={'10px'} px={"10px"} sx={{
          WebkitBorderTopRightRadius: "10px",
          WebkitBorderTopLeftRadius: "10px",
        }} width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
        margin={"auto"}
        mt={"10px"}></Box>
      <Box
        // height={"14vh"}
        width={isMediumScreen ? "60%" : isSmallScreen ? "100%" : "40%"}
        margin={"auto"}
        bgcolor={"white"}
  
        pb={"10px"}
        px={"10px"}
       
      > 
        <MyComponent sx={{ ".MuiInputBase-input": { fontSize: "25px" } }}>
          <FormTitle value={title} onChange={(e)=>setTitle(e.target.value)}name='unttledform'/>
        </MyComponent>
        <MyComponent>
          <TextField
            fullWidth
            id="standard-basic"
            variant="standard"
            placeholder="Form description"
            onChange={(e)=>setDescription(e.target.value)}
            sx={{
              ".MuiInputBase-input": { fontSize: "15px" },
            }}
          />
        </MyComponent>
      </Box>
      </form>
    </div>
  );
};

export default Header;