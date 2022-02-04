import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { IconButton, Paper, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { TwitterPicker } from "react-color";
import BasicCard from "../BasicCard/BasicCard";

const ColorPicker = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const getComponent = () => (
    <>
      <ColorLensIcon />
    </>
  );
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <BasicCard
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
            p: 0,
          },
        }}
      >
        <TwitterPicker triangle="hide" />
      </BasicCard>
    </>
  );
};
export default ColorPicker;
