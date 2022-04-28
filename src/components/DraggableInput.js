import React from "react";
import { Box } from "@mui/material";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import InputComponent from './InputComponent'


export default function DraggableInput({ ...props }) {
  const [{isDragging}, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: { id: "InputComponent", props: {} },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  return (
    <Box
      ref={drag}
      width='90%'
      // height={50}
      sx={{ border: isDragging? '2px dotted red': '0px'}}
      {...props}
    >
      <InputComponent />
    </Box>
  );
}
