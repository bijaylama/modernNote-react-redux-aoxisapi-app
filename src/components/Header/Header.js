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
import { useDispatch, useSelector } from "react-redux";
import { getFavAsync, getNotesAsync } from "../../redux/noteSlice";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const notes = useSelector((state) => state.notes);
  const totalFav = useSelector((state) =>
    state.notes.filter((val) => val.favorite === true)
  );
  const dispatch = useDispatch();
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
            {/* =================================================             
                  total favorite
              =================================================  */}
            <Box sx={myStyle.sideBox}>
              <Tooltip title={`${totalFav.length} favorite`}>
                <IconButton onClick={() => dispatch(getFavAsync("true"))}>
                  <Badge badgeContent={totalFav.length} color="error">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
            {/* =================================================             
                  total notes
              =================================================  */}
            <Box sx={{ ...myStyle.sideBox, ml: 1 }}>
              <Tooltip title={`${notes.length} note`}>
                <IconButton onClick={() => dispatch(getNotesAsync(""))}>
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
