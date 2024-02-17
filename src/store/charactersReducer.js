import { createSlice } from "@reduxjs/toolkit";

const charactersReducer = createSlice({
  name: "character",
  initialState: {
    characters: [],
  },
  reducers: {
    loadCharacters(state, action) {
      state.characters = action.payload.results;
      console.log(action.payload.results);
    },
  },
});

export default charactersReducer.reducer;
export const { loadCharacters } = charactersReducer.actions;
export const RaMChars = (state) => state.character.characters;
