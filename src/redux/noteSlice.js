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
  const response = await fetch("http://localhost:8000/notes");
  if (response.ok) {
    const notes = await response.json();
    return { notes };
  }
});
//
// add note on api
//
export const addNoteAsync = createAsyncThunk(
  "notes/addNote",
  async (payload) => {
    const response = await fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: payload.id,
        title: payload.title,
        details: payload.details,
        color: payload.color,
        date: payload.date,
      }),
    });
    if (response.ok) {
      console.log("sdkjlsj");
      const note = await response.json();
      return { note };
    }
  }
);
export const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getNotesAsync.pending]: (state) => {},
    [getNotesAsync.fulfilled]: (state, action) => {
      return action.payload.notes;
    },
    [addNoteAsync.pending]: (state, action) => {
      console.log("pending");
    },
    [addNoteAsync.fulfilled]: (state, action) => {
      state.push(action.payload.note);
    },
  },
});

// Action creators are generated for each case reducer function

export default noteSlice.reducer;
