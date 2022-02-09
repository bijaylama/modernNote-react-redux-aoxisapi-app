import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { Box, IconButton, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { motion } from "framer-motion";

const BasicCard = ({
  children,
  open,
  handleClose,
  anchorOrigin,
  transformOrigin,
  anchorEl,
  getComponent,
  handleOpen,
  color,
  sx,
}) => {
  return (
    <>
      <IconButton color={color} onClick={handleOpen}>
        {getComponent}
      </IconButton>
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
