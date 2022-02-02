import { Box, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Paper
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
          }}
        >
          <Toolbar>
            <CreateIcon />
          </Toolbar>
          <Toolbar>
            <Typography>Write Your Note</Typography>
          </Toolbar>
        </Paper>
        <Paper
          sx={{
            ml: 4,
            boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
            borderRadius: 2,
          }}
        >
          <Toolbar>
            <Box sx={{ pr: 1 }}>
              <FavoriteBorderIcon />
            </Box>
            <Box sx={{ pl: 1 }}>
              <NoteOutlinedIcon />
            </Box>
          </Toolbar>
        </Paper>
      </Box>
    </>
  );
};
export default Header;
