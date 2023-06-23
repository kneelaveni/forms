import React from "react";
import { Box, TextField } from "@mui/material";
// import Box from "@mui/material/Box";
const FormTitle = ({item}) => {
  return (
    <Box fontSize={'25px'} p={'20px'}>{item}</Box>
  );
};

export default FormTitle;
