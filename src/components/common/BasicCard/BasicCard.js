import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { IconButton, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const BasicCard = ({
  children,
  open,
  handleClose,
  anchorOrigin,
  transformOrigin,
  anchorEl,
  getComponent,
  handleOpen,
  sx,
}) => {
  return (
    <>
      <IconButton onClick={handleOpen}>{getComponent}</IconButton>
      <Menu
        sx={sx}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        keepMounted
        transformOrigin={transformOrigin}
        open={open}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </>
  );
};
export default BasicCard;
