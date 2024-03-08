import { createSlice } from "@reduxjs/toolkit";

const charactersReducer = createSlice({
  name: "character",
  initialState: {
    characters: [],
    totalCount: 0,
    loading: true,
  },
  reducers: {
    loadCharacters(state, action) {
      state.characters = [...state.characters, ...action.payload.results];
      state.totalCount = action.payload.info.count;
    },
    clearStore(state) {
      state.characters = [];
    },
    fetchToggle(state, action) {
      state.loading = action.payload;
    },
  },
});

export default charactersReducer.reducer;
export const { loadCharacters, clearStore, fetchToggle } =
  charactersReducer.actions;
export const characters = (state) => state.characters.characters;
export const countAllCharacters = (state) => state.characters.totalCount;
export const loading = (state) => state.characters.loading;
