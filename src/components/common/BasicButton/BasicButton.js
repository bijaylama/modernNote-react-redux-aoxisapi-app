import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const BasicButton = ({ variant, sx, startIcon, onClick, children }) => {
  return (
    <Button
      component={motion.div}
      whileHover={{ scale: 1.2 }}
      onClick={onClick}
      sx={sx}
      variant={variant}
      color="primary1"
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};
export default BasicButton;
