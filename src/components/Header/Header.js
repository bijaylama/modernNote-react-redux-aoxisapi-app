import { Box, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import CreateIcon from "@mui/icons-material/Create";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Forms from "../Forms/Forms";
import { myStyle } from "./myStyle";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={myStyle.wrapper}>
        <Paper sx={myStyle.myPaper}>
          <Toolbar>
            <CreateIcon />
          </Toolbar>
          <Toolbar>
            <Typography onClick={() => setOpen(!open)} sx={myStyle.pointer}>
              Write Your Note
            </Typography>
          </Toolbar>
        </Paper>
        <Paper sx={myStyle.sideHeader}>
          <Toolbar>
            <Box sx={myStyle.sideBox}>
              <FavoriteBorderIcon />
            </Box>
            <Box sx={myStyle.sideBox}>
              <NoteOutlinedIcon />
            </Box>
          </Toolbar>
        </Paper>
      </Box>
      {/* //
forms components
      // */}
      {open && <Forms onClick={() => setOpen(false)} />}
    </>
  );
};
export default Header;
