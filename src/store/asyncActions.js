import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchToggle } from "./charactersReducer";

export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",

  async (payload, { dispatch }) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${payload}`
    );
    const characters = await response.data;
    dispatch(fetchToggle(false));
    return characters;
  }
);
