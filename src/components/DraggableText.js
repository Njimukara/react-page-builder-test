import React from "react";
import { Box } from "@mui/material";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import Text from "./Text"



export default function DraggableComponent({ ...props }) {
  const [, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item:  {id: "Text", props: {}},
  });
  return (
    <Box
      ref={drag}
      width={100}
      height={50}
      sx={{}}
      {...props}
    >
      <Text />
    </Box>
  );
}
