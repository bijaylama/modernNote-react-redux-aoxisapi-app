import {
  Badge,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import CreateIcon from "@mui/icons-material/Create";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Forms from "../Forms/Forms";
import { myStyle } from "./myStyle";
import { useSelector } from "react-redux";

const Header = () => {
  const [open, setOpen] = useState(false);
  const notes = useSelector((state) => state.notes);
  const totalFav = useSelector((state) =>
    state.notes.filter((val) => val.favorite === true)
  );
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
            {/*               total favorite               */}
            <Box sx={myStyle.sideBox}>
              <Tooltip title={`${totalFav.length} favorite`}>
                <IconButton>
                  <Badge badgeContent={totalFav.length} color="error">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
            {/*               total note               */}
            <Box sx={{ ...myStyle.sideBox, ml: 1 }}>
              <Tooltip title={`${notes.length} note`}>
                <IconButton>
                  <Badge badgeContent={notes.length} color="primary">
                    <NoteOutlinedIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
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
