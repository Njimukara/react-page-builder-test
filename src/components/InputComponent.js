import { TextField } from "@mui/material";
import React from "react";

export default function InputComponent() {
  return (
    <div>
        <TextField 
          label="Number" 
          id="outlined-basic" 
          variant="outlined" 
          fullWidth
        />
    </div>
  );
}
