import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import CardList from "../common/CardList/CardList";
import Search from "../Search/Search";

const noteArray = [{}];

const NoteList = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Paper
        sx={{
          boxShadow: "0 0px 40px rgb(0 0 0 / 5%)",
          borderRadius: 2,
        }}
      >
        <Typography sx={{ pl: 4, pr: 4, pt: 2, pb: 2 }} variant="h5">
          Your Notes
        </Typography>
        {/* SEARCH BAR COMPONENT */}
        <Search />
        {/* CARD COMPONENT */}
        <Box
          sx={{
            display: "grid",
            gridGap: "2rem",
            m: 4,
            pb: 4,
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
        </Box>
      </Paper>
    </Box>
  );
};
export default NoteList;
