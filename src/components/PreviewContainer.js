import React, { useCallback } from "react";
import { Box } from "@mui/material";

export default function PreviewContainer({
  index,
  focused = false,
  onClick,
  children,
  ...restProps
}) 

    {
        const clickHandler = useCallback(() => {
            onClick(index);
    }, [index, onClick]);

  return (
    <Box
      onClick={clickHandler}
      sx={{ border: focused && "1px solid blue" }}
      {...restProps}
    >
      {children}
    </Box>
  );
}
