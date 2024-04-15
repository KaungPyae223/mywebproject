import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  HomeMovie: '1',
};

export const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    ChangeMovie: (state, action) => {
      state.HomeMovie = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ChangeMovie } = HomeSlice.actions;

export default HomeSlice.reducer;
