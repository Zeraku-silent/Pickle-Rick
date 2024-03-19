import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",

  async (payload) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${payload}`
    );
    const characters = await response.data;
    console.log(characters);
    return characters;
  }
);
