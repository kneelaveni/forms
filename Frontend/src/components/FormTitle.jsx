import React, { useState } from "react";
import { TextField } from "@mui/material";
// import Box from "@mui/material/Box";
const FormTitle = ({ value, onChange }) => {
  return (
    <div>
      <TextField
        fullWidth
        id="standard-basic"
        variant="standard"
        value={value}
        onFocus={(e) => e.target.select()}
        onChange={onChange}
      />
    </div>
  );
};

export default FormTitle;
