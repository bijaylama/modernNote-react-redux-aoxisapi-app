import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   notes: [
//     {
//       id: 1,
//       title: "this is title",
//       detail: "this is detail",
//       favorite: true,
//     },
//   ],
// };

//
// get notes api
//
export const getNotesAsync = createAsyncThunk("notes/getNotes", async () => {
  const response = await fetch("http://localhost:7000/notes");
  if (response.ok) {
    const notes = await response.json();
    return { notes };
  }
});
//
// add note on api
//
// export const addNoteAsync = createAsyncThunk("notes/addNote", async () =>{
//   const response = await fe
// })
export const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.title = action.payload.title;
    },
    editNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
  extraReducers: {
    [getNotesAsync.pending]: (state) => {},
    [getNotesAsync.fulfilled]: (state, action) => {
      return action.payload.notes;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
