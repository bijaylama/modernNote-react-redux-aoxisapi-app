import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { IconButton, Paper, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { TwitterPicker } from "react-color";
import BasicCard from "../BasicCard/BasicCard";
import { useDispatch, useSelector } from "react-redux";
import { noteColor } from "../../../redux/colorSlice";
import { CirclePicker } from "react-color";

const ColorPicker = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const colors = useSelector((state) => state.colors.name);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const getComponent = () => (
    <>
      <ColorLensIcon sx={{ color: colors }} />
    </>
  );
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeComplete = (color, event) => {
    const newColor = color.hex;
    dispatch(noteColor(newColor));
  };
  return (
    <>
      <BasicCard
        // color={colors}
        handleClose={handleClose}
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        horizontal="left"
        anchorEl={anchorEl}
        handleOpen={handleOpen}
        getComponent={getComponent()}
        sx={{
          ".MuiMenu-list": {
            p: 2,
          },
        }}
      >
        <CirclePicker
          color={colors}
          width="100%"
          circleSize={20}
          circleSpacing={6}
          onChangeComplete={handleChangeComplete}
          triangle="hide"
        />
      </BasicCard>
    </>
  );
};
export default ColorPicker;
