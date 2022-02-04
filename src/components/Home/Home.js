import { Box, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import Footer from "../Footer/Footer";
import { myStyle } from "./myStyle";
const Home = () => {
  return (
    <Box sx={myStyle.wrapper}>
      {/* //
      header and forms
      // */}
      <Header />
      <NoteList />
      <Footer />
    </Box>
  );
};
export default Home;
