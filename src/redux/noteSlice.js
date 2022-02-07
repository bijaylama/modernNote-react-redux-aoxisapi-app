import {
  createSlice,
  createAsyncThunk,
  applyMiddleware,
} from "@reduxjs/toolkit";

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
export const getNotesAsync = createAsyncThunk(
  "notes/getNotes",
  async (data) => {
    const response = await fetch(`http://localhost:8000/notes?q=${data}`);
    if (response.ok) {
      const notes = await response.json();
      return { notes };
    }
  }
);
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
//
//  delete note on api
//
export const deleteNoteAsync = createAsyncThunk(
  "notes/deleteNote",
  async (payload) => {
    const response = await fetch(`http://localhost:8000/notes/${payload.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { id: payload.id };
    }
  }
);
//
// patch(update) favorite note on api
//
export const toggleFavAsync = createAsyncThunk(
  "notes/favoriteNote",
  async (payload) => {
    const response = await fetch(`http://localhost:8000/notes/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        favorite: payload.favorite,
      }),
    });
    if (response.ok) {
      const note = await response.json();
      return { note };
    }
  }
);
// =====================================================
// update notes on api
// ======================================================
export const updateNoteAsync = createAsyncThunk(
  "notes/updateNote",
  async (payload) => {
    const response = await fetch(`http://localhost:8000/notes/${payload.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: payload.title,
        details: payload.details,
      }),
    });
    if (response.ok) {
      const note = await response.json();
      return { note };
    }
  }
);
// =====================================================
// get favorite and unfavorite notes from applyMiddleware
// ======================================================
export const getFavAsync = createAsyncThunk(
  "notes/getFavNote",
  async (data) => {
    const response = await fetch(
      `http://localhost:8000/notes?favorite=${data}`
    );
    if (response.ok) {
      const notes = await response.json();
      return { notes };
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
    [toggleFavAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (note) => note.id === action.payload.note.id
      );
      state[index].favorite = action.payload.note.favorite;
    },
    // ===============================================
    //        getfav fulfilled
    // =============================================
    [getFavAsync.fulfilled]: (state, action) => {
      return action.payload.notes;
    },
    [deleteNoteAsync.fulfilled]: (state, action) => {
      return state.filter((note) => note.id !== action.payload.id);
    },
    // ===============================================
    //        update notes
    // =============================================

    [updateNoteAsync.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (note) => note.id === action.payload.note.id
      );
      state[index].title = action.payload.note.title;
      state[index].details = action.payload.note.details;
    },
  },
});

// Action creators are generated for each case reducer function

export default noteSlice.reducer;
