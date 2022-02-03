import { Box, Paper, Toolbar, Typography } from "@mui/material";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import React from "react";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import Footer from "../Footer/Footer";
import Forms from "../Forms/Forms";
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
      <Forms />
      <NoteList />
      <Footer />
    </Box>
  );
};
export default Home;
