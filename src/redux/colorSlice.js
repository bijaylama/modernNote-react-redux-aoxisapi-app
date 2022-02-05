import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: { name: "#0F0E17" },
  reducers: {
    noteColor: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { noteColor } = colorSlice.actions;
export default colorSlice.reducer;
