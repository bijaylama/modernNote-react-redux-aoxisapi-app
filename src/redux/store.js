import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import colorReducer from "./colorSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    colors: colorReducer,
  },
});
