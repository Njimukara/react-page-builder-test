import React from "react";
import { Box } from "@mui/material";
import { useDrag } from "react-dnd";
import { DRAG_TYPES } from "../constants/DragTypes";
import ButtonComponent from './ButtonComponent'


export default function DraggableButton({ ...props }) {
  const [{isDragging}, drag] = useDrag({
    type: DRAG_TYPES.COMPONENT,
    item: { id: "ButtonComponent", props: {} },
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
      <ButtonComponent />
    </Box>
  );
}
