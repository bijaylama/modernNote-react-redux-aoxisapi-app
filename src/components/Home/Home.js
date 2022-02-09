import { Box, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import Footer from "../Footer/Footer";
import { myStyle } from "./myStyle";
import Svgs from "../Svgs";
import Svgsec from "../Svgsec";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box sx={myStyle.wrapper}>
      {/* //
      header and forms
      // */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <Header />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
      >
        <NoteList />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      >
        <Footer />
      </motion.div>
    </Box>
  );
};
export default Home;
