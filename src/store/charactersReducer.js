import { createSlice } from "@reduxjs/toolkit";

const charactersReducer = createSlice({
  name: "character",
  initialState: {
    characters: [],
    perPage: 1,
    totalCount: 0,
    totalPages: 1,
  },
  reducers: {
    loadCharacters(state, action) {
      state.characters = [...state.characters, ...action.payload.results];
      state.perPage = action.payload.results.length;
      state.totalCount = action.payload.info.count;
      state.totalPages = action.payload.info.pages;
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export default charactersReducer.reducer;
export const { loadCharacters, setCurrentPage } = charactersReducer.actions;
export const characters = (state) => state.characters.characters;
export const perPage = (state) => state.characters.perPage;
export const countAllCharacters = (state) => state.characters.totalCount;
export const totalPages = (state) => state.characters.totalPages;
