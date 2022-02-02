import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";

const Search = () => {
  return (
    <Toolbar sx={{ ml: 1, mr: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#F0F3FA",
          pl: 2,
          pr: 2,
          pt: 1,
          pb: 1,
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <Input
          sx={{
            flexGrow: 1,
          }}
          placeholder="Search Your Notes..."
          disableUnderline
        />
        <SearchOutlinedIcon />
      </Box>
    </Toolbar>
  );
};
export default Search;
