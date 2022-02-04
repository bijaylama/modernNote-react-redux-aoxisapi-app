import { Button } from "@mui/material";
import React from "react";

const BasicButton = ({ variant, sx, startIcon, onClick, children }) => {
  return (
    <Button
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
