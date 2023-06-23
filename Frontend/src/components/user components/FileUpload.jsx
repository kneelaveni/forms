import React from "react";
import { Button, Box, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

const FileUpload = ({ name, file, setFile,onFileUploadChange }) => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onFileUploadChange(selectedFile);
    
  };

  return (
    <>
      <InputLabel sx={{p:'20px', fontWeight:'800'}} required>{name}</InputLabel>
      <Box pl={"20px"} pb={"20px"}>
        <TextField
          type="file"
          accept=".pdf,.doc,.docx,image/*"
          onChange={handleFileChange}
        />
      </Box>
    </>
  );
};

export default FileUpload;
