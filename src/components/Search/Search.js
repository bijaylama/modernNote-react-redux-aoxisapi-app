import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";

const Search = () => {
  return (
    <Toolbar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#F0F3FA",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Input
          sx={{ flexGrow: 1 }}
          placeholder="Search Your Notes..."
          disableUnderline
        />
        <SearchOutlinedIcon />
      </Box>
    </Toolbar>
  );
};
export default Search;
