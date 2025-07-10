import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    getMovies: null,
    getMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.getMovies = movieResults;
      state.getMovieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
