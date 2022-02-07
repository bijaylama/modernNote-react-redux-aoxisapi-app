import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";
import { myStyle } from "./myStyle";

const Search = ({ onChange }) => {
  return (
    <Toolbar sx={myStyle.wrapper}>
      <Box sx={myStyle.myBox}>
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
