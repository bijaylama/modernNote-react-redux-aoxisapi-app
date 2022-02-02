import { Box, Paper, Toolbar, Typography } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Paper sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
          <Toolbar>
            <CreateIcon />
          </Toolbar>
          <Toolbar>
            <Typography>Write Your Note</Typography>
          </Toolbar>
        </Paper>
        <Paper sx={{ ml: 4 }}>
          <Toolbar>
            <NoteOutlinedIcon />
          </Toolbar>
        </Paper>
      </Box>
    </>
  );
};
export default Header;
