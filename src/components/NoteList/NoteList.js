import { Box, Input, Paper, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotesAsync } from "../../redux/noteSlice";
import CardList from "../common/CardList/CardList";
import Search from "../Search/Search";
import { myStyle } from "./myStyle";

const NoteList = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    console.log(search);
    dispatch(getNotesAsync(search));
  }, [dispatch, search]);
  return (
    <Box sx={myStyle.wrapper}>
      <Paper sx={myStyle.myPaper}>
        <Typography sx={myStyle.title} variant="h5">
          Your Notes
        </Typography>
        {/* SEARCH BAR COMPONENT */}
        <Search onChange={(e) => setSearch(e.target.value)} />
        {/* CARD COMPONENT */}
        <Box sx={myStyle.cardComponent}>
          {notes.length > 0 ? (
            notes.map((note) => <CardList key={note.id} note={note} />)
          ) : (
            <Typography>no data found ...</Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};
export default NoteList;
