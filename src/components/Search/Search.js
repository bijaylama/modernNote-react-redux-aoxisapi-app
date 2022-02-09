import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";
import { myStyle } from "./myStyle";
import { motion } from "framer-motion";

const Search = ({ onChange }) => {
  return (
    <Toolbar sx={myStyle.wrapper}>
      <Box
        component={motion.div}
        whileHover={{
          boxShadow:
            "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
        }}
        sx={myStyle.myBox}
      >
        <Input
          sx={myStyle.myInput}
          placeholder="Search Your Notes..."
          disableUnderline
          onChange={onChange}
        />
        <SearchOutlinedIcon />
      </Box>
    </Toolbar>
  );
};
export default Search;
