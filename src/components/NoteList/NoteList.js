import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import Search from "../Search/Search";

const NoteList = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Paper>
        <Toolbar>
          <Typography variant="h6">Your Notes</Typography>
        </Toolbar>
        <Search />
      </Paper>
    </Box>
  );
};
export default NoteList;
