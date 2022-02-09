import { Box, Input, Paper, SvgIcon, Toolbar, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
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
          <AnimatePresence>
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index / 4 }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transition: {
                      duration: 0.6,
                      delay: index / 8,
                      // delay: `0.${index}`,
                    },
                  }}
                >
                  <CardList key={note.id} note={note} />
                </motion.div>
              ))
            ) : (
              <Typography>no data found ...</Typography>
            )}
          </AnimatePresence>
        </Box>
      </Paper>
    </Box>
  );
};
export default NoteList;
