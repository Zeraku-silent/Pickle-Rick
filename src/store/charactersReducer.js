import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./asyncActions";

const charactersReducer = createSlice({
  name: "character",
  initialState: {
    characters: [],
    totalCount: 0,
    pageCurrent: 1,
    status: null,
    error: null,
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
    setCurrentPage(state) {
      state.pageCurrent = state.pageCurrent + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = "loading";
      state.status = null;
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = "resolved";
      state.characters = [...state.characters, ...action.payload.results];
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      console.log(state.characters);
    });
  },
});

export default charactersReducer.reducer;
export const { loadCharacters, clearStore, fetchToggle, setCurrentPage } =
  charactersReducer.actions;
export const pageCurrent = (state) => state.characters.pageCurrent;
export const characters = (state) => state.characters.characters;
export const countAllCharacters = (state) => state.characters.totalCount;
export const stat = (state) => state.characters.status;
