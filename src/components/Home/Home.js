import { Box, Paper, Toolbar, Typography } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import React from "react";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
const Home = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        flexDirection: "column",
        display: "flex",
        mt: 4,
        ml: 8,
      }}
    >
      <Header />
      <NoteList />
    </Box>
  );
};
export default Home;
