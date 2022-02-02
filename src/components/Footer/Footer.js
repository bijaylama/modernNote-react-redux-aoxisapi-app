import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Paper
        sx={{
          boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
          borderRadius: 2,
          pt: 2,
          pb: 2,
          pl: 4,
          pr: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>Privacy Policy Terms of Use</Typography>
        <Typography>2022© ReactNote</Typography>
      </Paper>
    </Box>
  );
};
export default Footer;
