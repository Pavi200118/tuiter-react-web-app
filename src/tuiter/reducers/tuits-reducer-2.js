import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const anothertuitsSlice = createSlice({
  name: "anothertuits",
  initialState: {
    tuits: tuits,
  },
  reducers: {
    initializeTuits: (state) => {
      // Additional logic if needed before initializing tuits
      state.tuits = tuits;
    },
  },
});

export const { initializeTuits } = anothertuitsSlice.actions;
export default anothertuitsSlice.reducer;
