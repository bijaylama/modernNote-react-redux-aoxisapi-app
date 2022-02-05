import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotesAsync } from "../../redux/noteSlice";
import CardList from "../common/CardList/CardList";
import Search from "../Search/Search";
import { myStyle } from "./myStyle";

const noteArray = [{}];

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
  return (
    <Box sx={myStyle.wrapper}>
      <Paper sx={myStyle.myPaper}>
        <Typography sx={myStyle.title} variant="h5">
          Your Notes
        </Typography>
        {/* SEARCH BAR COMPONENT */}
        <Search />
        {/* CARD COMPONENT */}
        <Box sx={myStyle.cardComponent}>
          {notes.map((note) => (
            <CardList
              key={note.id}
              id={note.id}
              title={note.title}
              details={note.details}
              favorite={note.favorite}
              date={note.date}
              color={note.color}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
export default NoteList;
