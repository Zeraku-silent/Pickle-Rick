import { createSlice } from "@reduxjs/toolkit";

const charactersReducer = createSlice({
  name: "character",
  initialState: {
    characters: [],
    currentPage: 1,
    perPage: 1,
    totalCount: 1,
    totalPages: 1,
  },
  reducers: {
    loadCharacters(state, action) {
      state.characters = action.payload.results;
      state.perPage = action.payload.results.length;
      state.totalCount = action.payload.info.count;
      state.totalPages = action.payload.info.pages;
      // console.log(state.totalPages);
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export default charactersReducer.reducer;
export const { loadCharacters, setCurrentPage } = charactersReducer.actions;
export const RaMChars = (state) => state.characters.characters;
export const perPage = (state) => state.characters.perPage;
export const totalCount = (state) => state.characters.totalCount;
export const totalPages = (state) => state.characters.totalPages;
